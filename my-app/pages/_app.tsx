import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "../context/auth";
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
