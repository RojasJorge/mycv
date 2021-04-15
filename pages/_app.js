import { StoreProvider } from 'easy-peasy'
import store from '../store'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import styles from '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider store={store}>
      <Component {...pageProps} />
    </StoreProvider>
  )
}

export default MyApp
