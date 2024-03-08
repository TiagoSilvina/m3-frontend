import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div>
        <h1>Something went wrong</h1>
    <Link to="/">Return to Home Page</Link>

    </div>
  )
}

export default Error;