import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
