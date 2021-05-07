import React from 'react';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className="bg-nav text-white text-md px-8 flex items-center">
      <div>
        <Link href="/">
          <img src="logo.png" width="120px" className="-ml-4 -mb-2" />
        </Link>
      </div>
      <div className="flex items-center gap-8 w-full justify-end">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/team">
          <a>Our Team</a>
        </Link>
        <Link href="/app">
          <a className="rounded p-2 bg-accent-2 text-center">ClapCoin App</a>
        </Link>
      </div>
    </div>
  );
};
