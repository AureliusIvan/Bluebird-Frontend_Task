import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Layout from '@/components/layout'
import '@/styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
// import { useState } from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


// react query 
const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>)
}
