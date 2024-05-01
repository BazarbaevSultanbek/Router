import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';

function MainPage() {
    const location = useLocation();

    return (
        <div className='MainPage'>
            <div className="container">
                <div className="MainPage-block">
                    <div className="MainPage-block-inner">
                        <div className="MainPage-block-inner-nav">
                            <Link to={'/Home'}>Home</Link>
                            <Link to={'/About'}>About</Link>
                            <Link to={'/Contact'}>Contact</Link>
                        </div>
                        <div className="MainPage-block-inner-items">
                            <AnimatePresence>
                                <Routes location={location} key={location.pathname}>
                                    <Route path="/Home" element={<Home />} />
                                    <Route path="/About" element={<About />} />
                                    <Route path="/Contact" element={<Contact />} />
                                </Routes>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
