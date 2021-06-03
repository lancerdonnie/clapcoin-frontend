import React from 'react';
import Link from 'next/link';

export default function Index2() {
  return (
    <div className="newpage text-white font-rubik overflow-x-hidden">
      <Nav />
      <Header />
      <Main />
      <Section1 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div className="mt-20">
      <p className="section1__header font-bold text-center text-[2.5rem] h-[155px] leading-[150%] relative">
        Core Values
      </p>
      <div className="flex mt-10 mx-20 gap-20 text-2xl">
        <Core
          title="Transparency"
          body="100% peer to peer with transparency ensured by the team in all
          aspects."
        />
        <Core
          title="Proper Reward"
          body=" With clapcoin all content and social activities will be rewarded as it should be."
        />
        <Core
          title="Community Driven"
          body="Clapcoin is 100% community driven with that in mind all decisions will represent a consensus of the community"
        />
      </div>
      <style jsx>{`
        .section1__header::after {
          content: '';
          position: absolute;
          top: 85px;
          width: 124px;
          height: 6.2px;
          background-color: #e9b143;
          left: 50%;
          transform: translateX(-50%);
        }
      `}</style>
    </div>
  );
};

const Core = ({ title, body }) => {
  return (
    <div className="flex flex-col flex-1 items-center text-center">
      <img className="w-20" src="coin4.png" />
      <div className="mt-12 font-bold ">{title}</div>
      <div className="mt-4 leading-7">{body}</div>
    </div>
  );
};

const Main = () => {
  return (
    <div className="mt-44 relative">
      <p className="main__header font-bold text-center text-[2.5rem] h-[155px] leading-[150%] relative">
        What is Clapcoin?
      </p>
      <img className="absolute top-[20%]" src="coin2.png" />
      <img className="absolute top-[43%]" src="coin3.png" />
      <div className="w-3/5 mx-auto text-center leading-[45px] text-2xl ">
        <p className="">
          Clapcoin is an open source; peer to peer, community driven digital
          currency, built on binance smart chain. Clapcoin derives it's pride
          base on it's utility to serve as a pinnacle of social media digital
          asset which serves to celebrate useful workdone, talent, creativity
          and societal contribution first within its ecosystem and then scalable
          to the world at large.
        </p>
        <p className="mt-8">
          Clapcoin has a very secure network between clappers within its
          ecosystem and no central body controls your crypto asset.
        </p>
      </div>
      <style jsx>{`
        .main__header::after {
          content: '';
          position: absolute;
          top: 85px;
          width: 124px;
          height: 6.2px;
          background-color: #e9b143;
          left: 50%;
          transform: translateX(-50%);
        }
      `}</style>
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex items-start px-8">
      <Social />
      <div
        style={{ flexBasis: '54%', flexShrink: 0 }}
        className="font-bold flex flex-col items-start text-[4rem]"
      >
        <div className="leading-[76px]">
          The biggest social gold and store of value after Bitcoin
        </div>
        <LightButton style={{ padding: '14px 64px', marginTop: 70 }} />
      </div>
      <div className="relative">
        <img src="Illustration.png" />
        <img className="absolute right-[70px]" width="150" src="coin1.png" />
        <img
          className="absolute left-[-250px] bottom-[-100px]"
          src="bar1.png"
        />
        <img
          className="absolute right-[-100px] bottom-[-100px]"
          src="bar1.png"
        />
      </div>
    </div>
  );
};

const Social = () => {
  return (
    <div
      style={{ flexShrink: 0 }}
      className="bg-white flex flex-col gap-4 py-6 mr-8 px-1 rounded-3xl"
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
