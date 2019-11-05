import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {faHeart as faheart} from '@fortawesome/free-regular-svg-icons';

const IsFavourite = ({isFavourite, onIconChange}) => {
    return ( 
        <FontAwesomeIcon 
            icon={isFavourite === true ? faHeart : faheart}
            onClick={onIconChange} />
     );
}
 
export default IsFavourite;