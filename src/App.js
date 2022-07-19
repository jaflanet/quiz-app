import { Login, Quiz, Start } from "./page";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/" element={<Login />} />
            <Route path="/start" element={<Start />} />
          </Routes>  
      </Router>
    </>
  );
}

export default App;
