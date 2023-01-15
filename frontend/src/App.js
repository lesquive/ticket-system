import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Body from "./components/body/Body";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <Body />
        <Footer />
      </ApolloProvider>
    </>
  );
}

export default App;
