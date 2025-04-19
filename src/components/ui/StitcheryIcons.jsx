
import React from "react";
import { Scissors, Ruler } from "lucide-react";

// Using existing Lucide icons that fit our needs
export { Scissors, Ruler };

// Custom Needle icon
export const Needle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 21v-8" />
    <path d="M12 7V3" />
    <path d="M8 13c0-2.76 1.79-5 4-5s4 2.24 4 5-1.79 5-4 5-4-2.24-4-5z" />
  </svg>
);

// Custom Thread icon
export const Thread = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="7" r="4" />
    <path d="M12 11v10" />
    <path d="M8 15h8" />
  </svg>
);

// Custom Stitch icon
export const StitchIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2 12h6" />
    <path d="M10 12h4" />
    <path d="M16 12h6" />
    <path d="M4 8v8" />
    <path d="M12 6v12" />
    <path d="M20 8v8" />
  </svg>
);

// Custom Sewing Machine icon
export const SewingMachine = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="4" y="12" width="16" height="8" rx="2" />
    <path d="M6 9v3" />
    <path d="M18 9v3" />
    <rect x="8" y="5" width="8" height="4" rx="1" />
    <path d="M12 9v3" />
    <circle cx="9" cy="16" r="1" />
    <circle cx="15" cy="16" r="1" />
  </svg>
);
