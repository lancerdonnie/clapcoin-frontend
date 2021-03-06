import { Navbar } from 'components/Navbar';
import { Values } from 'components/Values';
import { Footer } from 'components/Footer';
import Head from 'next/head';
import styles from 'styles/Home.module.css';

export default function Home() {
  return (
    <div className="bg-nav text-white min-h-screen">
      <Head>
        <title>Clap Coin</title>
        <meta name="description" content="Homepage of clapcoin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div>
        <div className="flex justify-center">
          <img src="logo.png" width="300px" />
        </div>
        <div className="text-5xl text-center font-bold -mt-16 font-space">
          CLAPCOIN
        </div>
        <div className="w-7/12 lg:w-10/12  mx-auto mt-8 text-lg">
          <div className="text-justify">
            Clapcoin is the open source person to person{' '}
            <span className="text-accent">community</span> digital currency,
            listed on Binance smart chain and traded on pancakeswap. Our network
            is a secure network between clappers where No one controls your
            money, but yourself <span className="text-accent">clapper</span>. In
            other words, no prying eyes would be invading your privacy and
            respect as to what you want to do with your money.
          </div>
          <div className="text-center mt-4">
            POWERED BY <a href="http://www.clapmi.com">WWW.CLAPMI.COM</a>
          </div>
        </div>
      </div>
      <div className="flex md:block mt-12 p-8 bg-alt">
        <div className="w-1/2 md:w-full">
          <div className="text-center text-xl">OUR VALUES</div>
          <ul className="mt-8">
            <Values
              title="Community Driven"
              body="our clappers teams are of selfless and community driven
                mindsets."
            />
            <Values
              title="Glass Operations"
              body="the clap community strictly operates under transparency, as
              every clapper dev team member is a community growth enthusiast"
            />
          </ul>
        </div>
        <div className="flex-auto flex justify-center items-center">
          <img
            className="h-[400px]"
            src="https://safemoon.net/img/home/team.svg"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
