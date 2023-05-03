import React from "react";
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { PolybaseProvider,AuthProvider } from "@polybase/react";
import { Polybase } from "@polybase/client";
import { Auth } from "@polybase/auth";

const polybase = new Polybase({
defaultNamespace: process.env.NEXT_PUBLIC_NAMESPACE,
}); 
const auth = typeof window !== "undefined" ? new Auth() : null;
export default function App({ Component, pageProps }: AppProps) {
 
  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
         <PolybaseProvider polybase={polybase}>
         <AuthProvider auth={auth!} polybase={polybase}>
        <Component {...pageProps} />
        </AuthProvider>
        </PolybaseProvider>
      </MantineProvider>
    </>
  );
}
