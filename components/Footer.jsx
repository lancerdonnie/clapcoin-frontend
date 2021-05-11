import React from 'react';
import { FooterIcons } from 'components/FooterIcons';

export const Footer = () => {
  return (
    <footer className="h-96 flex flex-col items-center justify-center font-bold px-2">
      <FooterIcons />
      <div className="mt-12">
        Copyright © {new Date().getFullYear()}, ClapCoin.{' '}
      </div>
      <div className="mt-12 text-center">
        All trademarks and copyrights belong to their respective owners.
      </div>
    </footer>
  );
};
