import React from "react";
import TicketBox from "./tickets/TicketBox";
import "./Body.css";
import { getTicketSummary } from "./tickets/TicketsQueries";
import { useQuery } from "@apollo/client";

export default function Body() {
  const { data, loading, error } = useQuery(getTicketSummary);

  console.log(data);
  console.log(loading);
  console.log(error);

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
