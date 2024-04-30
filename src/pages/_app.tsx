import "@/styles/globals.css";
import "@mantine/core/styles.css"
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { ChallanProvider } from "@/context";

export default function App({ Component, pageProps }: AppProps) {
  return(
  <ChallanProvider>
    
  
<MantineProvider>
  <Component {...pageProps} />
</MantineProvider>
 </ChallanProvider> 
  )
}
