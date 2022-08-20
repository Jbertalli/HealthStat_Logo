import Head from 'next/head'
import Icons from '../components/icon'

export default function Home() {
  return (
    <>
      <Head>
        <title>HealthStat Logo</title>
        <meta name="description" content="logo" />
      </Head>
      <div>
        <Icons />
      </div>
    </>
  );
}
