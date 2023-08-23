import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatApp from "./components/ChatApp";
import Login from "./components/Login";
import Register  from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatApp />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
