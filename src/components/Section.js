import React from 'react';
import Header from './Header';

function Section({fullscreen}) {

    const sectionClassList = fullscreen ? 'section fullscreen' : 'section';

    const sectionStyles = {
        section: {
            width: '100%',
            minHeight: '100vh',
            backgroundColor: '#222'
        },
        fullscreen: {
            width: '100%',
            minHeight: '100vh',
            backgroundColor: '#ddd'
        }
    }

    return (
        <div 
            className={sectionClassList} 
            style={fullscreen ? sectionStyles.fullscreen : sectionStyles.section}
        >
            <Header headerInitialHeight={80}></Header>
        </div>
    )
}

export default Section;