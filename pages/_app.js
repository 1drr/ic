import '../styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="https://res.cloudinary.com/det1qnlrh/image/upload/v1782432654/Favicon_vv26yk.png" />
        <link rel="apple-touch-icon" href="https://res.cloudinary.com/det1qnlrh/image/upload/v1782432654/Favicon_vv26yk.png" />
        <meta property="og:image" content="https://res.cloudinary.com/dtaaamnmf/image/upload/v1781267016/og_cw1nkb.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Manrope:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
