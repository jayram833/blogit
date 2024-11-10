import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import SinglePost from "./pages/SinglePost";

import About from "./pages/About";

import Header from "./componenets/Header";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="createpost" element={<CreatePost />} />
        <Route path="singlepost" element={<SinglePost />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
