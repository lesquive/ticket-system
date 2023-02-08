import React from "react";

export default function UnixTimestamp(props) {
  const timestamp = props.timestamp;
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateTimeString();
}
