import React from 'react';

import './Alert.css';

function Alert({msg}) {
    // console.log(props);
    return (
        <div className="alert alert-primary" role="alert">
            Something bad happened!
            <p><strong>{msg.toString()}</strong></p>
        </div>
    )
}

export default Alert;

