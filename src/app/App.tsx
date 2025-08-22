import Home from "../pages/Home";
import Header from "../widgets/header/Header";
import Footer from "../widgets/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "../pages/Courses";
import Pricing from "../pages/Pricing";
import CourseOpened from "../pages/CourseOpened";
import AboutUs from "../pages/About";
import Contacts from "../pages/Contacts";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";

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
          <Route path="/about" element={<AboutUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
