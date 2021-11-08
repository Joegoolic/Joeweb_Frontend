import '../styles/globals.scss'
import Axios from "axios"

function MyApp({ Component, pageProps }) {
  Axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  Axios.defaults.xsrfCookieName = "csrftoken";
  Axios.defaults.withCredentials = true;
  return <Component {...pageProps} />
}

export default MyApp
