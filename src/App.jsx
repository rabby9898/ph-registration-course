import { Toaster } from "react-hot-toast";
import "./App.css";
import Cards from "./componenets/Cards/Cards";
import Header from "./componenets/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <Toaster />
      <Cards></Cards>
    </>
  );
}

export default App;
