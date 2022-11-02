import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import TopBar from './Components/TopBar';
import Navbar from './Components/Navbar';
import HomeScreen from './Screen/HomeScreen';
import Row from 'react-bootstrap/esm/Row';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import CategoryScreen from './Screen/CategoryScreen';

function App() {
  return (
    <>
      <div>
        <Container fluid className="p-0">
          <TopBar />
          <Row className="bg-dark">
            <Navbar />
          </Row>
        </Container>
      </div>
      <div className=" main">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/category/:value" element={<CategoryScreen />} />
        </Routes>
      </div>
      <footer className="mt-3">
        <Footer />
      </footer>
    </>
  );
}

export default App;
