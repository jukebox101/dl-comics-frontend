import React, { useState, useEffect } from "react";
import ComicCard from './ComicCard'

const ComicContainer = (props) => {


    const comicsCards = props.comics.map(comic => 
        comic.title.toLowerCase().includes(props.query) ? 

        <ComicCard 
            key={comic.id}
            comicId={comic.id} 
            title={comic.title} 
            price={comic.price} 
            genre={comic.genre}
            author={comic.author}
            release_date={comic.release_date}
            description={comic.description}
            publisher={comic.publisher} 
            addToCart={props.addToCart}
        />
            : null
    )
            
    return (
        <div>
            <h2>Comics Page</h2>
            {comicsCards}
        </div> 
    )
}
export default ComicContainer;