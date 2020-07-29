import React, { useEffect, useState } from 'react';

const ComicShow = ({ match }) => {

    const { params: { id } } = match;
    let [comic, setComic] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:3000/comics/${id}`)
        .then(r => r.json())
        .then(comic => {
            
            const comicInfo = comic
            setComic(comic)
            console.log(comicInfo)
        })
    },[])

    return(
        <div>
            <h2>{comic.title}</h2>
            <p>Price: ${comic.price}</p>
            <p>Genre: {comic.genre}</p>
            <p>Author: {comic.author}</p>
            <p>Release Date: {comic.release_date}</p>
            <p>Description: {comic.description}</p>
            <p>Publisher: {comic.publisher}</p>
        </div>
    )
}
export default ComicShow;