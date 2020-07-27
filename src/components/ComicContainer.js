import React, {useState, useEffect} from "react";
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

    const renderComics = () => {
        return comics.map(comic => <ComicCard 
            key={comic.id} 
            title={comic.title} 
            price={comic.price} 
            genre={comic.genre}
            author={comic.author}
            release_date={comic.release_date}
            descripton={comic.descripton}
            publisher={comic.publisher} />)
    }
    return (
      <div>
          <h2>Comics Page</h2>
          {renderComics()}
      </div>  
    )
}
export default ComicContainer;