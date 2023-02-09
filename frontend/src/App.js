import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Ticket from "./pages/Ticket";
import Client from "./pages/Client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="ticket" element={<Ticket />} />
              <Route path="client" element={<Client />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </TicketProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
