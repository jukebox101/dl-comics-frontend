import React, { useState, useEffect } from "react";
import ComicCard from './ComicCard'

const ComicContainer = () => {
    
    let [comics, setComics] = useState([])
    
    const baseUrl = "http://localhost:3000"
    useEffect(() => {
        fetch(`${baseUrl}/comics`)
        .then(r => r.json())
        .then(comicsData => {
            const comics = comicsData
            setComics(comics)
        })
    }, [])

    const comicsCards = comics.map(comic => 
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
            />)
    
    return (
      <div>
          {comicsCards}
      </div>  
    )
}
export default ComicContainer;