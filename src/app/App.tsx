import Home from "../pages/Home";
import Header from "../widgets/header/Header";
import Footer from "../widgets/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "../pages/Courses";
import Pricing from "../pages/Pricing";
import CourseOpened from "../pages/CourseOpened";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route
            path="/courses/course&page&opened"
            element={<CourseOpened />}
          />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
