import Head from 'next/head';
import { NextStudio } from 'next-sanity/studio';
import config from '../../../sanity.config';

export default function StudioPage() {
  return (
    <>
      <Head>
        <title>Portfolio Studio</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div style={{ height: '100vh', width: '100vw' }}>
        <NextStudio config={config} />
      </div>
    </>
  );
}
