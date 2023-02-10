import { useParams } from "react-router-dom";

const Ticket = () => {
  let { id } = useParams();
  return <h1>Ticket Info: {id}</h1>;
};

export default Ticket;
