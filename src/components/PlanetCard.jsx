import React from 'react'
import useGlobalReducer from '../hooks/useGlobalReducer';
import { Link } from 'react-router-dom';
const PlanetCard = ({ item }) => {

    const { store, dispatch } = useGlobalReducer();

    let favorites = store.favorites
    let url = "/planet/"+item.name;

    const addToFavorites = (nameid, fav, url) => {
        let buscar = fav.find((people) => people.name == nameid)

        if(buscar === undefined){
        
        dispatch({ type: 'add_to_favorite', payload: { "name": nameid, "url": url } })
        }
        else{
            dispatch({ type: 'delete_favorite', payload: { "name": nameid, "url": url } })
        }
    };

    return (
        <div className="card bg-dark text-light" style={{ minWidth: "300px" }} key={item.name}>
            <img src="https://picsum.photos/400/200" className="card-img-top" alt="People card" />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>

                <div className='d-flex gap-2'>
                    <span>Population:</span>
                    <span>{item.population}</span>
                </div>
                <div className='d-flex gap-2'>
                    <span>Terrain:</span>
                    <span className="d-inline-block text-truncate" style={{ maxWidth: "200px" }}>{item.terrain}</span>
                </div>
                <div className='pt-3 d-flex justify-content-between'>
                    <Link to={`/planet/${item.name}`}>
                    <button className="btn btn-light"> Learn More!</button>
                    </Link>
                    <a href="#" className="btn btn-outline-warning">
                        <i className={`fa-${favorites.find((people) => people.name == item.name)?"solid":"regular"} fa-heart`} onClick={() => {
                            addToFavorites(item.name, favorites, url);
                        }}></i>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default PlanetCard