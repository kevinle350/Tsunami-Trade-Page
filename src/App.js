import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Trade from './components/pages/Trade';
import Navbar from './components/Navbar';
import Buy from './components/pages/Buy';

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
                    <Route path='/buy' element={<Buy />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
