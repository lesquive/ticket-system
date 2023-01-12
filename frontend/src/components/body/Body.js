import React from "react";
import TicketBox from "./tickets/TicketBox";
import "./Body.css";

export default function Body() {
  return (
    <div className="body">
      <div className="tickets">
        <TicketBox />
        <TicketBox />
        <TicketBox />
        <TicketBox />
        <TicketBox />
      </div>
    </div>
  );
}
