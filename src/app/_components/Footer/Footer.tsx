import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Devansh Singh",
    designation: "CSE '27",
    image:
      "/Devansh.jpg",
  },
  {
    id: 2,
    name: "Aayushi Thakre",
    designation: "CSE '27",
    image:
      "/Aayushi.jpg",
  },
  {
    id: 3,
    name: "Ria Amit Singh",
    designation: "BDES '27",
    image:
      "/Ria.jpg",
  },
  {
    id: 4,
    name: "Rohit Gaikwad",
    designation: "BDES '27",
    image:
      "/Rohit.jpg",
  },
];

function Footer() {
  return (
    <footer className="w-full border-t bg-white mt-16 py-10 px-4">
      {/* Link Row */}
      <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 mb-8">
        <a href="#" className="hover:text-[#00C4B4] transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-[#00C4B4] transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-[#00C4B4] transition-colors">Contact Us</a>
      </div>

      {/* Tooltip Row */}
      <div className="flex justify-center mb-16 h-4 ">
        <AnimatedTooltip items={people} />
      </div>

      {/* Copyright */}
      <p className="text-center text-xs text-gray-400">
        © {new Date().getFullYear()} <span className="font-semibold text-[#00C4B4]">Jeevan</span>. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
