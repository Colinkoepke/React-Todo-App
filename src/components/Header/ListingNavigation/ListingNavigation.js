import React from 'react'
import {NavLink} from 'react-router-dom';

import './ListingNavigation.css';
import Aux from '../../hoc/Auxiliary';

function ListingNavigation(props) {
    return (
        <Aux>
            <ul className="ListingNavigation">
                <li>
                    <NavLink 
                        to="/tasks/pending" 
                        onClick={() => props.changeTask('pending')}
                        activeClassName="selected"
                        className="navItem"
                    >Pending Tasks
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/tasks/completed"
                        onClick={() => props.changeTask('completed')}
                        activeClassName="selected"
                        className="navItem"
                    >Completed Tasks
                    </NavLink>
                </li>
            </ul>
        </Aux>
    )
}

export default ListingNavigation;
