import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import UserManager from "./pages/UserManager";
import "./styles/css/bootstrap-grid.css";
import "./styles/css/bootstrap.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserManager />} />
          <Route path="/login" element={<Login />} 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
