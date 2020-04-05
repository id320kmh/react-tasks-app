import React from 'react';

function Contacts() {

    const contactsStyles = {
        container: {
            width: '100%'
            
        },
        h3: {
            color: '#000',
            fontSize: '40px'
        }
    }

    return (
        <div style={contactsStyles.container}>
            <h3>This page is about our contacts!</h3>
        </div>
    )
}

export default Contacts;