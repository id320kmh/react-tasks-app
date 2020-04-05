import React from 'react';
import Todo from '../../containers/Todo/Todo';


function Home() {

    const fullscreen = true;

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
            backgroundColor: '#ddd',
            position: 'absolute',
            paddingTop: '100px'
        }
    }

    return (
        <div 
            className={sectionClassList} 
            style={fullscreen ? sectionStyles.fullscreen : sectionStyles.section}
        >
            <Todo></Todo>
        </div>
    )
}

export default Home;