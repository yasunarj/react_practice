import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Lesson1 from "./components/Lesson1";
import Lesson2 from "./components/Lesson2";
import Lesson3 from "./components/Lesson3";
import Lesson4 from "./components/Lesson4";
import Lesson5 from "./components/Lesson5";
import Lesson6 from "./components/Lesson6";
import Lesson7 from "./components/Lesson7";
import Lesson8 from "./components/Lesson8";
import "./components/Lesson1.css"

const Example = () => {
  return (
    <Router>
      <div className="bg-custom-image">
        <Header />
        <main>
          <Routes>
            <Route path="/lesson1" element={<Lesson1 />} />
            <Route path="/lesson2" element={<Lesson2 />} />
            <Route path="/lesson3" element={<Lesson3 />} />
            <Route path="/lesson4" element={<Lesson4 />} />
            <Route path="/lesson5" element={<Lesson5 />} />
            <Route path="/lesson6" element={<Lesson6 />} />
            <Route path="/lesson7" element={<Lesson7 />} />
            <Route path="/lesson8" element={<Lesson8 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default Example;
