import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Toaster } from 'react-hot-toast';
export default function App({ Component, pageProps }: AppProps) {
  return (<div className={inter.className}>
    <GoogleOAuthProvider clientId="891060304559-vhjg3tn4647tnsb4tcco302r3nslgvn4.apps.googleusercontent.com">
        <Component {...pageProps} />
        <Toaster/>
    </GoogleOAuthProvider>
    
    </div>);
}
