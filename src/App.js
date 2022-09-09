import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {BrowserRouter} from 'react-router-dom';
import GitSection from "./pages/Git";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<GitSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
