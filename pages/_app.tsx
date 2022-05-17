import { useState, useEffect } from 'react';
import '../styles/globals.css'
import "../styles/nav.css";
import '../styles/BuyCar.css';
import '../styles/CarInfo.css';
import '../styles/SellCar.css';
import '../styles/VehicleInfo.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tabs/style/react-tabs.css';
import type { AppProps } from 'next/app'
import Layout from '../components/Layout.jsx'

function MyApp({ Component, pageProps }: AppProps) {

  const [showing, setShowing] = useState(false);

  useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
  return (
  <Layout>
<Component {...pageProps} />
  </Layout>
  );
  }
}

export default MyApp
