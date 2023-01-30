import Home from "./component/Home/Home";
import NavBar from "./component/Nav/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateItem from "./component/Create/CreateItem";
import UpdateItem from "./component/Update/UpdateItem";

function App() {
  return (
    <>
     
  
      <BrowserRouter>
      <NavBar />
        <Routes>
      
          <Route path="/" element={ <Home />}></Route>
          <Route path="/Create" element={ <CreateItem />}></Route>
          <Route path="/Update/:id" element={ <UpdateItem />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
