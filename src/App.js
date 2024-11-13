import ExploreProducts from './component/ExploreProducts';
// import GrabDeals from './component/GrabDeals';
import Homepage from './component/Homepage';
import Login from './component/Login';
import PaymentPage from './component/PaymentPage';
import Register from './component/Register';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/home" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login/>} />
        <Route path="/payment" element={<PaymentPage/>} />
        <Route path="/explore" element={<ExploreProducts/>} />
        {/* <Route path="/deals" element={<GrabDeals/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
