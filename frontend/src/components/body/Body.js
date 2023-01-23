import React from "react";
import TicketBox from "./tickets/TicketBox";
import { useEffect } from "react";
import { useTicket } from "./../../context/TicketContext";
import UnixTimestamp from "../utils/UnixTimestamp";
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
        {ticketSummary &&
          ticketSummary.getTicketSummary.map((ticket) => (
            <TicketBox
              key={ticket.id}
              title={ticket.title}
              status={ticket.status}
              author={`${ticket.author.first_name} ${ticket.author.last_name}`}
              avatar={ticket.author.avatar}
              created={<UnixTimestamp timestamp={ticket.createdAt} />}
              updated={ticket.updatedAt}
            />
          ))}
        {/* <TicketBox />
        <TicketBox />
        <TicketBox />
        <TicketBox /> */}
      </div>
    </div>
  );
}
