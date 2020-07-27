import React from 'react';

const ComicCard = (props) => {

    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.price}</p>
            <p>{props.genre}</p>
            <p>{props.author}</p>
            <p>{props.release_date}</p>
            <p>{props.description}</p>
            <p>{props.publsher}</p>
        </div>
    )
}

export default ComicCard;