import React, { useState, useEffect } from "react";
import ComicCard from './ComicCard'

const ComicContainer = (props) => {
    
    let [comics, setComics] = useState([])
    let [cart, setCart] = useState([])
    console.log(cart)

    useEffect(() => {
        fetch(`http://localhost:3000/comics`)
        .then(r => r.json())
        .then(comicsData => {
            const comicsArr = comicsData
            setComics(comicsArr)
        })
    }, [])
    
    const comicsCards = comics.map(comic => 
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
            />
            : null
            )
            
    return (
      <div>
          {comicsCards}
      </div>  
    )
}
export default ComicContainer;