import Head from 'next/head';
import Image from 'next/image';
import type { NextPage } from 'next';

import Layout from '../components/Layout';
import Prose from '../components/Prose';
import Mint from '../components/Mint';
import Faq from '../components/Faq';
import Team from '../components/Team';
import Roadmap from '../components/Roadmap';
import topImage from '../public/assets/1920x600.png';
import contractConfig from '../config/contract-config.json';

const Home: NextPage = () => {
  const { nftName } = contractConfig;

  return (
    <Layout>
      <Head>
        <title>{nftName}</title>
      </Head>

      <div className="w-full overflow-hidden">
        <Image src={topImage} alt={nftName} layout="responsive" />
      </div>

      <div className="bg-gray-800 py-16">
        <Prose>
          <h1 className="text-5xl font-bold mb-4">{nftName}</h1>

          <p className="text-xl">
             We offer to your attention the 'Fried Orcs' NFT collection. Collection of 1000 unique digital images inspited by the heroik fight and endless humour and optimism of Ukrainian people.
             Collection is based on stylesed imagess of three most hated russist orcs and the reflections of the people's wishes to them. 
          </p>
        </Prose>
      </div>

      <div className="py-16">
        <Prose>
          <Mint />
        </Prose>
      </div>

      <div className="bg-gray-800 py-16">
        <Prose>
          <Faq />
        </Prose>
      </div>

      <div className="py-16">
        <Prose>
          <Roadmap />
        </Prose>
      </div>

      <div className="bg-gray-800 py-16">
        <Prose>
          <Team />
        </Prose>
      </div>
    </Layout>
  );
};

export default Home;
