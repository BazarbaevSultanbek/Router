// MainPage.js
import React, { useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Public from '../Public/Public';
import Protected from '../Protected/Protected';

function MainPage() {
    const [status, setStatus] = useState(false)


    return (
        <div className='Main'>
            <div className="container">
                <div className="Main-block">
                    <div className="MainPage-block-nav">
                        <p>{status ? 'Welcome!' : 'You are not logged in'}</p>
                        <button style={{ display: status ? 'block' : 'none' }} onClick={() => setStatus(false)}>Sign out</button>
                    </div>
                    <ul>
                        <li><Link to={'./public'}>Public</Link></li>
                        <li><Link to={'./protected'}>Protected</Link></li>
                    </ul>
                    <Routes>
                        <Route path="public" element={<Public />} />
                        <Route path="protected" element={<Protected status={status} setStatus={setStatus} />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
