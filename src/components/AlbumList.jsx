import { useState, useEffect } from "react";
import AlbumCard from "../AlbumCard";

export default function AlbumList({ toggle }) {
    const [albums, setAlbums] = useState()
    useEffect(() => {
        fetch('https://album-api-mk.web.app/albums')
            .then(response => response.json())
            .then(setAlbums)
            .catch(alert)


    }, [toggle])

    return (
        <main className='album-list'>
            <h2> Album Go Here...</h2>
            {!albums
                ? <p>Loading...</p>
                : albums.map(thisAlbum => <AlbumCard key={thisAlbum.albumId} thisAlbum={thisAlbum} />)

            }
        </main>
    )
}
