import { Navbar } from 'components/Navbar';
import { Footer } from 'components/Footer';
import Head from 'next/head';

export default function About() {
  return (
    <div className="bg-nav text-white min-h-screen">
      <Head>
        <title>About</title>
        <meta name="description" content="About Clapcoin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="flex lg:block px-8 mt-4">
        <div className="w-1/2 lg:w-auto lg:mb-8 px-8">
          <div className="text-6xl md:text-4xl mb-8 font-bold">ABOUT US</div>
          <div>
            CLAPCOIN (CAP) What is ClapCoin (CAP)? Clapcoin is a decentralized
            open-source digital currency, built on the Binance smart chain. The
            major idea behind the CAP is to provide a Defi transaction network
            which operates on the BSC network. Cap is a community-driven token,
            powered by CLAPMI. CAP is a highly functional open-source
            desensitized finance (Defi). A Community-driven token that aims to
            create a society that is more secure, transparent, and fair. Our
            transparency or glass operations is aimed at ensuring CAP is here to
            reward every well-deserving community members (Clapper) whom have
            contributed respectively to the growth of the Clap community.
            CLAPCOIN would serve as the prime crypto currency of the future with
            a total supply of (100,000,000,000) and (50,000,000) in circulation
            and 5,000,000 in the liquidity pool traded on various secure crypto
            currency trading platforms , With many more growth and development
            coming soon. To buy Clap coin and be a certified Clapper today: link
            provided here
          </div>
        </div>
        <div className="flex-auto flex justify-center items-center">
          <img className="h-[400px]" src="about.svg" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
