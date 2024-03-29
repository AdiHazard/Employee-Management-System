import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router>

              {/*<Navbar />*/}

              <Routes>
                  <Route exact path="/" element={<Login />} />
                  <Route path="/Home" element={<><Navbar /><Home /></>} />
                  <Route exact path="/adduser" element={<><Navbar />><AddUser /></>} />
                  <Route exact path="/edituser/:id" element={<><Navbar /><EditUser /></>} />
                  <Route exact path="/viewuser/:id" element={<><Navbar /><ViewUser /></>} />
                  <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
