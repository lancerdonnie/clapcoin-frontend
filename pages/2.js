import React from 'react';
import Link from 'next/link';

export default function Index2() {
  return (
    <div className="newpage text-white font-rubik">
      <Nav />
      <Header />
    </div>
  );
}

const Main = () => {};

const Header = () => {
  return (
    <div className="flex items-start">
      <Social />
      <div
        style={{ flexBasis: '54%', flexShrink: 0 }}
        className="font-bold flex flex-col items-start text-[4rem]"
      >
        <div>The first Nigerian decentralized token that anyone can own.</div>
        <LightButton style={{ padding: '14px 64px', marginTop: 70 }} />
      </div>
      <div>
        <img src="illustration.png" />
      </div>
    </div>
  );
};

const Social = () => {
  return (
    <div
      style={{ flexShrink: 0 }}
      className="bg-white flex flex-col gap-4 py-6 mx-8 px-1 rounded-3xl"
    >
      <img src="icon_twitter.png" />
      <img src="icon_telegram.png" />
      <img src="icon_instagram.png" />
    </div>
  );
};

const Nav = () => {
  return (
    <div className="newpage__nav flex justify-between font-inter">
      <div className="flex">
        <Link href="/">
          <div className="flex items-center">
            <img
              src="favicon.ico"
              width="47px"
              height="40px"
              //   className="-ml-4 -mb-2"
            />
            <span className="ml-2 font-semibold">CLAP COIN</span>
          </div>
        </Link>
      </div>
      <div className="newpage__nav__right flex items-center justify-between gap-[43px]">
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">White Paper</Link>
        <Link href="/">Our Team</Link>
        <Link href="/">
          <LightButton />
        </Link>
      </div>
    </div>
  );
};

const LightButton = ({ style = {} }) => {
  return (
    <div
      style={{
        padding: '14px 32px',
        boxShadow: '0px 13px 49px 21px rgba(242, 186, 76, 0.25)',
        ...style,
      }}
      className={`cursor-pointer font-medium text-base rounded-[32px] bg-[#E9B143]`}
    >
      Buy Token
    </div>
  );
};
