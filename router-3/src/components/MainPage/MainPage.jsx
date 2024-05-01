import React, { useState } from 'react'
import { Route, Routes, useLocation, } from 'react-router'
import Vasya from '../Vasya/Vasya'
import Peter from '../Peter/Peter'
import { Link } from 'react-router-dom'
import Users from '../Users/Users'

function MainPage() {
    const location = useLocation()

    const [items, setItems] = useState([
        {
            area: '/'
        }, {
            area: '/Users'
        }, {
            area: '/Users/Peter'
        }, {
            area: '/Users/Vasya'
        }
    ])

    return (
        <div className='MainPage'>
            <div className="container">
                <div className="MainPage-block">
                    <div className="MainPage-block-location">

                        <Link to={location.pathname}>{location.pathname}</Link>
                    </div>
                   <div className="MainPage-block-flex">
                   <div className="MainPage-block-nav">
                        <p> <Link to={'/'}>Home</Link></p>
                        <p><Link to={'/Users'}>Users</Link></p>
                        <ul>
                            <li>
                                <Link to={'Users/Peter'}>Peter</Link>
                            </li>
                            <li>
                                <Link to={'Users/Vasya'}>Vasya</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="MainPage-block-inner">
                        <Routes>
                            <Route path="Users" element={<Users />} />
                            <Route path="Users/Peter" element={<Peter />} />
                            <Route path="Users/Vasya" element={<Vasya />} />
                        </Routes>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage