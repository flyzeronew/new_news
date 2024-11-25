import { Noto_Sans_TC, Lexend } from 'next/font/google';
import "@/styles/globals.scss";

export const noto = Noto_Sans_TC({
  weight: ["400", "500" ,"600" ,"800"],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-tc', 
});

export const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${noto.variable} ${lexend.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
