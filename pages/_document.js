import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html style={{ scrollBehavior: 'smooth' }}>
      <Head>
        
        {/* UNICONS */}
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
        
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />
      </Head>
      <body style={{ scrollBehavior: 'smooth' }}>
        <Main />
        <NextScript />

        
        {/* MAIN JS */}
        <script src="assets/js/main.js" defer />
      </body>
    </Html>
  )
}