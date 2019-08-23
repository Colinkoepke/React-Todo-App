import React from 'react'
import './Header.css';

import ListingNavigation from './ListingNavigation/ListingNavigation';

function Header(props) {
    return (
        <div className="Header">
            <h1>My TODO List</h1>
            <ListingNavigation changeTask={(val) => props.changeTask(val)}/>
        </div>
    )
}

export default Header;
