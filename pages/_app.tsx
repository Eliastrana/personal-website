import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/index.css'
import '../styles/global.css'; // Adjust the path based on your directory structure


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
              href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Great+Vibes&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
              rel="stylesheet"
          />
          <link
              href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
              rel="stylesheet"
          />
        </Head>
          <Component {...pageProps} />
          {/*<CustomCursor />*/}

      </>
  )
}
