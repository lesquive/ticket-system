import React from "react";
import TicketBox from "./tickets/TicketBox";
import { useEffect } from "react";
import { useTicket } from "./../../context/TicketContext";
import "./Body.css";

export default function Body() {
  const { ticketSummary } = useTicket();

  useEffect(() => {
    let abortController = new AbortController();
    console.log(ticketSummary);
    return () => {
      abortController.abort();
    };
  }, [ticketSummary]);

  return (
    <div className="body">
      <div className="tickets">
        <TicketBox
          title={"Title"}
          status={"Status"}
          author={"Author"}
          avatar={"Avatar"}
          created={"Created At"}
          updated={"Updated At"}
        />
        <TicketBox />
        <TicketBox />
        <TicketBox />
        <TicketBox />
      </div>
    </div>
  );
}
