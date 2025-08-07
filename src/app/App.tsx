import Home from "../pages/Home";
import Header from "../widgets/header/Header";
import Footer from "../widgets/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "../pages/Courses";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
