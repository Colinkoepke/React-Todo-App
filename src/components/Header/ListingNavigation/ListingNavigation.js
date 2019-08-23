import React from 'react'
import {Link} from 'react-router-dom';

import './ListingNavigation.css';
import Aux from '../../hoc/Auxiliary';

function ListingNavigation(props) {
    return (
        <Aux>
            <ul className="ListingNavigation">
                <li><Link to="/tasks/pending" onClick={() => props.changeTask('pending')}>Pending Tasks</Link></li>
                <li><Link to="/tasks/completed" onClick={() => props.changeTask('completed')}>Completed Tasks</Link></li>
            </ul>
        </Aux>
    )
}

export default ListingNavigation;
