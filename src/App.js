import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Trade from './components/pages/Trade';
import Navbar from './components/Navbar';

function App() {
    const Layout = (
        <div className='App'>
            <div className='bg'>
                <Navbar />
            </div>
        </div>
    ); 
    
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={Layout} />
                    <Route index element={<Trade />} />
                    <Route path='/trade' element={<Trade />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
