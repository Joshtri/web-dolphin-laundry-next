"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

const RealisticBubbles: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 5, 15); // Subtle fog for depth
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // --- Improved Shader Material for Water Bubbles ---
    const bubbleShader = {
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        varying vec3 vWorldPosition;
        uniform float uTime;
        
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          
          // Super subtle wobble - like thin soap film
          float wobbleX = sin(position.y * 4.0 + uTime * 2.5) * 0.01;
          float wobbleY = cos(position.x * 4.0 + uTime * 2.0) * 0.01;
          worldPosition.xyz += normal * (wobbleX + wobbleY) * 0.3;
          
          vViewPosition = -worldPosition.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        varying vec3 vWorldPosition;
        uniform float uTime;

        // Iridescent color function - rainbow effect on thin film
        vec3 getIridescentColor(float angle, float intensity) {
          // Soap bubble rainbow colors
          float t = angle * 1.5;
          vec3 color;
          
          if (t < 0.25) {
            color = mix(vec3(1.0, 0.2, 0.4), vec3(1.0, 0.8, 0.2), t * 4.0);
          } else if (t < 0.5) {
            color = mix(vec3(1.0, 0.8, 0.2), vec3(0.2, 1.0, 0.4), (t - 0.25) * 4.0);
          } else if (t < 0.75) {
            color = mix(vec3(0.2, 1.0, 0.4), vec3(0.2, 0.4, 1.0), (t - 0.5) * 4.0);
          } else {
            color = mix(vec3(0.2, 0.4, 1.0), vec3(0.8, 0.2, 1.0), (t - 0.75) * 4.0);
          }
          
          return color * intensity;
        }

        // Simple noise for micro-bubbles inside
        float hash(vec2 p) {
          p = fract(p * vec2(123.34, 456.21));
          p += dot(p, p + 45.32);
          return fract(p.x * p.y);
        }

        void main() {
          vec3 normal = normalize(vNormal);
          vec3 viewDir = normalize(vViewPosition);
          
          // Strong fresnel - soap bubbles are most visible at edges
          float fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), 4.0);
          
          // Iridescence based on viewing angle and time
          float iridescenceAngle = dot(normal, vec3(0.0, 1.0, 0.0)) * 0.5 + 0.5;
          iridescenceAngle += sin(vWorldPosition.x * 0.5 + uTime * 0.3) * 0.2;
          iridescenceAngle += cos(vWorldPosition.y * 0.5 + uTime * 0.2) * 0.2;
          
          // Iridescent colors only on edges
          vec3 iridescentColor = getIridescentColor(iridescenceAngle, 1.0);
          
          // Base is almost completely transparent with slight blue tint
          vec3 baseColor = vec3(0.95, 0.98, 1.0) * 0.1;
          
          // Mix: transparent center, iridescent edges
          vec3 color = mix(baseColor, iridescentColor, fresnel * fresnel);
          
          // Strong specular highlights (like soap bubble reflections)
          vec3 reflectDir = reflect(-viewDir, normal);
          
          // Multiple highlight layers for realistic soap film
          float highlight1 = pow(max(dot(viewDir, reflectDir), 0.0), 80.0);
          float highlight2 = pow(max(dot(viewDir, reflectDir), 0.0), 200.0);
          float highlight3 = pow(max(dot(viewDir, reflectDir), 0.0), 500.0);
          
          // White highlights
          color += vec3(1.2, 1.2, 1.0) * highlight1 * 1.0;
          color += vec3(1.5, 1.5, 1.3) * highlight2 * 0.8;
          color += vec3(2.0, 2.0, 1.8) * highlight3 * 0.5;
          
          // === TINY BUBBLES INSIDE (like in soap foam) ===
          vec2 uv = gl_FragCoord.xy / 1000.0;
          float microBubbles = 0.0;
          
          // Create small bubble pattern
          for (int i = 0; i < 4; i++) {
            vec2 offset = vec2(float(i) * 1.618, float(i) * 2.718);
            vec2 samplePos = uv * 3.0 + offset + uTime * 0.05;
            float noise = hash(samplePos);
            
            // Only show some as tiny bubbles
            if (noise > 0.9) {
              float bubble = smoothstep(0.95, 1.0, noise);
              microBubbles += bubble * 0.3;
            }
          }
          
          // Add subtle rainbow to micro bubbles
          vec3 bubbleColor = getIridescentColor(fract(uTime * 0.1), 0.5);
          color += bubbleColor * microBubbles * (1.0 - fresnel);
          
          // === ALPHA (TRANSPARENCY) ===
          // Soap bubbles are mostly invisible in center, visible on edges
          float alpha = fresnel * 0.3; // Start with edge visibility
          alpha += highlight1 * 0.4; // Highlights are visible
          alpha += highlight2 * 0.3;
          alpha += highlight3 * 0.2;
          alpha += microBubbles * 0.1; // Micro bubbles slightly visible
          alpha = clamp(alpha, 0.0, 0.8);
          
          // Final color with slight color shift based on thickness
          float thickness = sin(vWorldPosition.y * 2.0 + uTime) * 0.5 + 0.5;
          color *= 0.8 + thickness * 0.2;
          
          gl_FragColor = vec4(color, alpha);
        }
      `,
    };

    // --- Create Multiple Bubbles ---
    const bubbles: THREE.Mesh[] = [];
    const bubbleCount = window.innerWidth < 768 ? 15 : 30;

    // Create different sizes of spheres
    const geometries = [
      new THREE.SphereGeometry(0.8, 32, 32),
      new THREE.SphereGeometry(0.6, 24, 24),
      new THREE.SphereGeometry(0.4, 20, 20),
      new THREE.SphereGeometry(0.3, 16, 16),
    ];

    for (let i = 0; i < bubbleCount; i++) {
      const geoIndex = i % geometries.length;
      const geometry = geometries[geoIndex];

      const material = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
        },
        vertexShader: bubbleShader.vertexShader,
        fragmentShader: bubbleShader.fragmentShader,
        transparent: true,
        side: THREE.DoubleSide,
        depthWrite: false, // Important for proper transparency sorting
      });

      const bubble = new THREE.Mesh(geometry, material);

      // Random scale - various sizes
      const scale = 0.1 + Math.random() * 0.6;
      const scaleVariation = 0.9 + Math.random() * 0.2;
      bubble.scale.set(scale, scale * scaleVariation, scale);

      // Starting positions
      bubble.position.x = (Math.random() - 0.5) * 25;
      bubble.position.y = -15 - Math.random() * 20;
      bubble.position.z = (Math.random() - 0.5) * 8;

      // Random rotation
      bubble.rotation.x = Math.random() * Math.PI;
      bubble.rotation.y = Math.random() * Math.PI;

      scene.add(bubble);
      bubbles.push(bubble);

      // GSAP Animation - natural floating motion
      const duration = 18 + Math.random() * 25;
      const delay = Math.random() * 12;

      // Main floating up animation
      gsap.to(bubble.position, {
        y: 20,
        duration: duration,
        repeat: -1,
        delay: delay,
        ease: "sine.inOut",
        onRepeat: () => {
          // Reset position with variation
          bubble.position.x = (Math.random() - 0.5) * 25;
          bubble.position.y = -15 - Math.random() * 10;
          bubble.position.z = (Math.random() - 0.5) * 8;
          // Slight random scale change
          const newScale = 0.1 + Math.random() * 0.4;
          bubble.scale.set(
            newScale,
            newScale * (0.9 + Math.random() * 0.2),
            newScale
          );
        },
      });

      // Gentle swaying motion
      gsap.to(bubble.position, {
        x: `+=${2 + Math.random() * 3}`,
        duration: 4 + Math.random() * 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Slow rotation
      gsap.to(bubble.rotation, {
        y: Math.PI * 2,
        duration: 40 + Math.random() * 30,
        repeat: -1,
        ease: "none",
      });

      // Pulsing scale (like bubbles breathing)
      gsap.to(bubble.scale, {
        x: bubble.scale.x * 1.05,
        y: bubble.scale.y * 1.05,
        z: bubble.scale.z * 1.05,
        duration: 2 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 3,
      });
    }

    // --- Add lighting for better reflections ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Directional light for highlights
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 20, 15);
    scene.add(directionalLight);

    // Back light for rim lighting
    const backLight = new THREE.DirectionalLight(0x4466ff, 0.3);
    backLight.position.set(-10, -10, -10);
    scene.add(backLight);

    // --- Animation Loop ---
    const clock = new THREE.Clock();
    let frame = 0;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      frame++;

      bubbles.forEach((bubble, index) => {
        (bubble.material as THREE.ShaderMaterial).uniforms.uTime.value =
          elapsedTime;

        // Add subtle floating motion
        bubble.position.x += Math.sin(elapsedTime * 0.5 + index) * 0.002;
        bubble.position.y += Math.cos(elapsedTime * 0.3 + index * 0.7) * 0.001;

        // Gentle wobble
        bubble.rotation.z = Math.sin(elapsedTime * 0.8 + index) * 0.02;
      });

      // Slow camera movement for more dynamic feel
      camera.position.x = Math.sin(elapsedTime * 0.05) * 0.5;
      camera.position.y = Math.cos(elapsedTime * 0.03) * 0.3;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // --- Handle Resize ---
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    const container = containerRef.current;

    return () => {
      window.removeEventListener("resize", handleResize);
      if (container) {
        container.removeChild(renderer.domElement);
      }
      geometries.forEach((geom) => geom.dispose());
      bubbles.forEach((b) => (b.material as THREE.ShaderMaterial).dispose());
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden z-0"
    />
  );
};

export default RealisticBubbles;
