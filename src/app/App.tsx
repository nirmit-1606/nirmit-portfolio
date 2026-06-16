import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from "./components/pages/Homepage";
import { CaseStudyRouter } from "./components/case-study/CaseStudyRouter";
import { About } from "./components/pages/About";
import { Work } from "./components/pages/Work";
import { Contact } from "./components/pages/Contact";
import { Layout } from "./Layout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-study/:id" element={<CaseStudyRouter />} />
        </Route>
      </Routes>
    </Router>
  );
}
