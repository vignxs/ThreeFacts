import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register  from "./components/Register";
import { ThreeFacts } from "./components/ThreeFacts";
import { AiGame } from "./components/AiGame";
import { TfWithMemory } from "./components/TfWithMemory";
import { PySkillScale } from "./components/PySkillScale";
import { Home } from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/threefacts" element={<ThreeFacts />} />
        <Route path="/tfwithmemory" element={<TfWithMemory />} />
        <Route path="/aigame" element={<AiGame />} />
        <Route path="/pyskillscale" element={<PySkillScale />} />
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
