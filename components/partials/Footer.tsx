"use client";
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-500 text-white py-7">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg font-semibold">
          Dolphin Laundry & Dry Cleaning Kupang
        </p>
        <p className="mt-2 text-sm">
          © {currentYear} Dolphin Laundry & Dry Cleaning Kupang. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="#"
            className="text-white hover:text-yellow-400 transition duration-300"
          >
            Privacy Policy
          </a>
          <span>|</span>
          <a
            href="#"
            className="text-white hover:text-yellow-400 transition duration-300"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
