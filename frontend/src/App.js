import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Body from "./components/body/Body";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { TicketProvider } from "./context/TicketContext";
import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <TicketProvider>
          <Header />
          <Body />
          <Footer />
        </TicketProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
