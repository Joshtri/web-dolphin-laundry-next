"use client";
import Image from "next/image";

interface LoadingScreenProps {
  message?: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  message = "Loading...",
}) => {
  return (
    <>
      <style jsx>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        @keyframes scale-pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes glow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.2);
          }
        }

        @keyframes dot-bounce {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-10px);
            opacity: 1;
          }
        }

        @keyframes shadow-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(0.8);
            opacity: 0.2;
          }
        }

        .bounce-logo {
          animation: bounce 1.2s ease-in-out infinite;
        }

        .scale-logo {
          animation: scale-pulse 1.2s ease-in-out infinite;
        }

        .glow-effect {
          animation: glow 1.2s ease-in-out infinite;
        }

        .dot-1 {
          animation: dot-bounce 0.8s ease-in-out infinite;
        }

        .dot-2 {
          animation: dot-bounce 0.8s ease-in-out infinite 0.2s;
        }

        .dot-3 {
          animation: dot-bounce 0.8s ease-in-out infinite 0.4s;
        }

        .shadow-bounce {
          animation: shadow-pulse 1.2s ease-in-out infinite;
        }
      `}</style>

      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
            radial-gradient(circle, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
            radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "25px 25px",
            backgroundPosition: "0 0, 12px 12px",
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-6">
          {/* Bouncing Logo */}
          <div className="relative bounce-logo">
            <div className="scale-logo">
              <Image
                src="/assets/images/dl-logo.png"
                alt="Dolphin Laundry Logo"
                width={120}
                height={120}
                className="drop-shadow-2xl"
                priority
              />
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-white/30 blur-2xl rounded-full -z-10 glow-effect" />
          </div>

          {/* Loading Dots */}
          <div className="text-center">
            <div className="flex justify-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full dot-1" />
              <div className="w-2 h-2 bg-white rounded-full dot-2" />
              <div className="w-2 h-2 bg-white rounded-full dot-3" />
            </div>
          </div>

          {/* Shadow under logo */}
          <div
            className="absolute bottom-0 w-20 h-4 bg-blue-900/40 blur-xl rounded-full shadow-bounce"
            style={{ bottom: "-60px" }}
          />
        </div>
      </div>
    </>
  );
};

export default LoadingScreen;
