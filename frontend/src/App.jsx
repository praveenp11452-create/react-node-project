import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blogs from "./Blogs";
import Navbar from "./Navbar";
import BlogDetails from "./Blogdetails";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blogdetail/:id" element={<BlogDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
