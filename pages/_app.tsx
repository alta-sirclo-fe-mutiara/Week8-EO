import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/main.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { ApolloProvider } from "@apollo/client";
import client from "../utils/apollo-client";
import { AuthContextProvide } from "../context/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  <style jsx global>{`
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: "Poppins", sans-serif;
    }

    * {
      box-sizing: border-box;
    }
  `}</style>;
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);
  return (
    <AuthContextProvide>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </AuthContextProvide>
  );
}

export default MyApp;
