import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import UserManager from "./pages/UserManager";
import "./App.css";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
import "./styles/css/bootstrap.css"
import "./styles/css/bootstrap-grid.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserManager />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user/:id/edit" element={<EditEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
