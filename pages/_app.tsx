import '../styles/globals.css'
import '../styles/mobilenavlinks.css';
import "../styles/nav.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app'
import Layout from '../components/Layout.jsx'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Layout>
<Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
