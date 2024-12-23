import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  const gtmId = process.env.GTM_ID;
  return (
    <Html lang='zh-Hant-TW'>
      <Head />        
        {/* GTM */}
        <script src="https://code.jquery.com/jquery-3.6.0.min.js" />
        <script
          dangerouslySetInnerHTML={{
            __html: `    
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
            `,
          }}
        />
      <body>
        <Main />
        <NextScript />
        {/* GTM */}
        <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
        </noscript>
      </body>
    </Html>
  );
}
