import PageNotFound from '../../img/404.jpg';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div>
        <img alt='NOT_FOUND_IMAGE' src={PageNotFound} style={{ width: 400, height: 400, display: 'block', margin: 'auto', position: 'relative' }} />
        <center><Link to="/">Return to Home Page</Link></center>
    </div>
);

export default NotFound;
