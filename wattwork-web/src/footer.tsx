// src/components/Footer.tsx
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-8 px-4 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} WattWork Initiative. Bridging the theory-to-practice gap in engineering.</p>
    </footer>
  );
};