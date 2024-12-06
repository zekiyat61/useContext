import { useContext } from "react";
import { MyContext } from "./App";

function ComponentA() {
  const username = useContext(MyContext);

  return (
    <div>
      <h1>Username: {username}</h1>
    </div>
  );
}

export default ComponentA;
