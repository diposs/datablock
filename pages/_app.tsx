import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { MantineProvider, createEmotionCache } from '@mantine/core';
import { PolybaseProvider,AuthProvider } from "@polybase/react";
import { Polybase } from "@polybase/client";
import { Auth } from "@polybase/auth";
import {FirstHeader} from '../components/header/header1';

const polybase = new Polybase({defaultNamespace: "pk/0xdc18a8cc9ccb7fc299d07cba29c278bb4b5a5c86cea8eef7a6d6b58f2322f8401cefa1478c9262b9730a32f34cf6c7e529ca337a0f1a50075ce1f4fbd368bbe6/testingplot",}); 
const auth = typeof window !== "undefined" ? new Auth() : null;
const myCache = createEmotionCache({ key: 'mantine' });

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    polybase.signer(async (data) => {
      return {
        h: 'eth-personal-sign',
        sig: await auth!.ethPersonalSign(data),
      }
    })
   });
 
  return (
     <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        emotionCache={myCache}
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
     >
      <PolybaseProvider polybase={polybase}>
       <AuthProvider auth={auth!} polybase={polybase}>
       <FirstHeader/>
        <Component {...pageProps} />
       </AuthProvider>
      </PolybaseProvider>
     </MantineProvider>
  );
}