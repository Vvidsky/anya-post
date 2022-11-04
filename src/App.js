import {Routes, Route} from 'react-router-dom';
import Home from './routes/Home';
import Layout from './routes/Layout/Layout';
import Index from './routes/index/Index'

function App() {
  return (
    <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/news" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":newsId" elements={<div>newsid</div>} />
        </Route>
      </Routes>
  );
}

export default App;
