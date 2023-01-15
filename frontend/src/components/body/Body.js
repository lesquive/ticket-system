import React from "react";
import TicketBox from "./tickets/TicketBox";
import "./Body.css";

export default function Body() {
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
