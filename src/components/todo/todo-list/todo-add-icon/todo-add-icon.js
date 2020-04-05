import React from 'react';

import PlaylistAddTwoToneIcon from '@material-ui/icons/PlaylistAddTwoTone';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';





function TodoAddIcon({addButtonFocused}) {

    // const addButtonStyles = {
    //     icon :{
    //         marginRight: '30px'
    //     }
    // }

    if (addButtonFocused) {
        return (
            <AddToQueueIcon/>
        )
    } else {
        return (
            <PlaylistAddTwoToneIcon />
        )
    }


}

export default TodoAddIcon;