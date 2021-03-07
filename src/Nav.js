import React from 'react'
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <div>
            <ul>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/cats'>
                    <li>Cat Page</li>
                </Link>
                <Link to='/dogs'>
                    <li>Dog Page</li>
                </Link>
            </ul>
        </div>
    )
}

export default Nav;