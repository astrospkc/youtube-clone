import "./App.css";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import YoutubeVideo from "./components/YoutubeVideo";
import Test from "./components/Test";
import YoutubeMain from "./components/YoutubeMain";
import Searchbar from "./components/Searchbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Searchbar />
        <Routes>
          <Route path="/" element={<YoutubeMain />} />
          <Route path="/youtubeVideo" element={<YoutubeVideo />} />
          <Route path="/test" element={<Test />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
