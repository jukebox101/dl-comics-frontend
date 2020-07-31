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
            console.log("comic info set",comicInfo)
        })
    },[])

    return(
        <div>
            <img src={comic.img_url} alt={comic.title} width="450" height="600" />
            <h2>{comic.title}</h2>
            <p>Publisher: {comic.publisher}</p>
            <p>Price: ${comic.price}</p>
            <p>Genre: {comic.genre}</p>
            <p>Written By: {comic.author}</p>
            <p>Art By: {comic.artist}</p>
            <p>Release Date: {comic.release_date}</p>
            <p>Description: {comic.description}</p>
        </div>
    )
}
export default ComicShow;