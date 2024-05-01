import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function MainPage() {
 
    return (
        <div className='MainPage'>
            <div className="container">
                <div className="MainPage-block">
                    <div className="MainPage-block-inner">
                        <div>
                            <Link to="/characters">Characters</Link>
                        </div>
                        <div>
                            <Link to="/episodes">Episodes</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage