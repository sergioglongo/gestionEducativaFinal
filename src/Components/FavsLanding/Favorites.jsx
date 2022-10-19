import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Carousel from '../News/Carousel'
//import Item from '../News/Item'
import { getFavorites } from "../../redux/actions"
import { Divider, Typography } from "@mui/material"

const Favorites = () => {
    // eslint-disable-next-line
    const [favorites, setFavourites] = useState([])
    const news = useSelector(state => state.news)
    const [favoritesFormated, setFavoritesFormated] = useState([])

    let dispatch = useDispatch()

    const user = useSelector((state) => state.user)
    const favsDB = useSelector((state) => state.favorites)

    const favsDBFormated = []
    favsDB.map(newItem => favsDBFormated.push({
        idNews: newItem.favorites.idNews,
        body: newItem.favorites.body,
        title: newItem.favorites.title,
        image: newItem.favorites.image,
    }))
    useEffect(() => {
        dispatch(getFavorites())
    }, [dispatch])

    useEffect(() => {
        const favLocal = localStorage.getItem('favoritos')
        if (favLocal !== null) {
            let favoritesNews = []
            const favArray = JSON.parse(favLocal)
            setFavourites(favArray)
            news?.map(newItem => {
                favArray.map(favorite => {
                    if (favorite.id.toString() === newItem.idNews.toString()) {
                        return favoritesNews.push(newItem)
                    }
                    return null
                })
                return null
            })
            setFavoritesFormated(favoritesNews)
        }

    }, [dispatch, news])

    return (
        <div>
            <Typography align={"center"} sx={{ mt: 2 }} gutterBottom variant="h4" >Noticias Favoritas</Typography>
            <Divider />
            {user[0] ?
                <Carousel sx={{ m: 3 }} news={favsDBFormated} />
                :
                <Carousel sx={{ m: 3 }} news={favoritesFormated} />
            }

        </div>

    )
}

export default Favorites
