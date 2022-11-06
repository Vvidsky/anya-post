import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./routes/Home";
import Layout from "./routes/Layout/Layout";
import Index from "./routes/index/Index";
import News from "./routes/news/news";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/news/:newsId" element={<News />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
