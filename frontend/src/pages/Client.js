import { useParams } from "react-router-dom";

const Client = () => {
  let { id } = useParams();
  return <h1>Client Info: {id} </h1>;
};

export default Client;
