import { createContext, useState } from "react";
import ComponentA from "./ComponentA";
import "./App.css"


const MyContext = createContext();
function App() {
  const [username, setUsername] = useState("Zekiyat");
  return (
    <MyContext.Provider value={username}>
      <div>
        <ComponentA />
      </div>
    </MyContext.Provider>
  );
}
export { MyContext }; 
export default App;
