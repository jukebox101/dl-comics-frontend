import React, {useState, useEffect} from "react";
import ComicCard from './ComicCard'
import Cart from './Cart'
import CartContext from './CartContext'

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
            comicId={comic.id} 
            title={comic.title} 
            price={comic.price} 
            genre={comic.genre}
            author={comic.author}
            release_date={comic.release_date}
            description={comic.description}
            publisher={comic.publisher} />)
    }
    return (
        <CartContext>
        <div>
            <h2>Comics Page</h2>
            {renderComics()}
        </div> 
        </CartContext> 
    )
}
export default ComicContainer;