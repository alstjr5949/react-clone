import { Route, Routes } from "react-router-dom";
import Blog from "./Routes/Blog";
import Community from "./Routes/Community";
import Document from "./Routes/Document";
import Home from "./Routes/Home";
import Tutorial from "./Routes/Tutorial";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/document" element={<Document />}></Route>
      <Route path="/tutorial" element={<Tutorial />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/community" element={<Community />}></Route>
    </Routes>
  );
}

export default App;
