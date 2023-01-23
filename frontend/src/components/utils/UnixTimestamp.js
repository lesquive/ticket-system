import React from "react";

export default function UnixTimestamp(props) {
  const timestamp = props.timestamp;
  const date = new Date(timestamp * 1);
  return date.toLocaleDateString();
}
