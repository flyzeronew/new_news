import { Noto_Sans_TC, Lexend, Roboto } from 'next/font/google';
import "@/styles/globals.scss";

export const noto = Noto_Sans_TC({
  weight: ["400", "500" ,"600" ,"800"],
  subsets: ['latin'],
  display: 'swap',
});

export const roboto = Roboto({
  weight: ["400","500","700"],
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (  
      <Component {...pageProps} />
  );
}
