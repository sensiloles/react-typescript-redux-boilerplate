import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar(): React.ReactComponentElement<'div'> {
  return (
    <div className="nav-bar">
      <div>
        <Link to="/">Home</Link>
        {''}
        <Link to="/counter">Counter</Link>
      </div>
    </div>
  );
}
