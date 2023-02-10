import { createContext, useContext, useState, useEffect } from "react";
import { getTicketSummary } from "../components/homeBody/tickets/TicketsQueries";
import { useQuery } from "@apollo/client";

const TicketContext = createContext();

export function useTicket() {
  return useContext(TicketContext);
}

export function TicketProvider({ children }) {
  const [ticketSummary, setTicketSummary] = useState();
  const ticketSum = useQuery(getTicketSummary);

  useEffect(() => {
    let abortController = new AbortController();
    if (ticketSum.error) {
      console.log(ticketSum.error);
    }
    if (ticketSum.loading) {
      console.log("loading");
    }
    setTicketSummary(ticketSum.data);

    return () => {
      abortController.abort();
    };
  }, [ticketSum]);

  const value = { ticketSummary };

  return (
    <TicketContext.Provider value={value}>{children}</TicketContext.Provider>
  );
}

export default TicketContext;
