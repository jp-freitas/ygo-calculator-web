import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import { DuelistContextProvider } from '../contexts/DuelistsContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DuelistContextProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </DuelistContextProvider>
  );
}

export default MyApp
