import '@/styles/globals.css'
import 'antd/dist/reset.css'
import type { AppProps } from 'next/app'
import React, { useContext, useEffect } from 'react'
import Reducer from './../components/reducer'
import { RootContext } from './../components/reducer'

export default function App({ Component, pageProps }: AppProps) {

  return( 
    <Reducer>
      <Component {...pageProps} />
    </Reducer>
  )
}
