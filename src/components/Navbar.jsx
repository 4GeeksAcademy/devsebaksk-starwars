import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import React, { useEffect, useState } from "react";
export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();
	const deleteFav = (name) => {
			dispatch({ type: 'delete_favorite', payload: { "name": name } })
		};
	return (
		<nav className="navbar bg-dark bg-light">
			<div className="container">
				<Link to="/">
					<img src="/src/assets/img/logo.png" alt="Logo" height="60" className="d-inline-block align-text-top" /></Link>

				<div className="ml-auto d-flex align-items-center ">

					<li className="nav-item dropdown">
						<button className="nav-pill dropdown-toggle btn btn-light" data-bs-toggle="dropdown" href="#" role="button">Favorites
							<span className="badge text-bg-dark rounded-pill ms-2 ">
								{store.favorites.length}
							</span>
						</button>
						<ul className="dropdown-menu">
							{store.favorites.map((item, index) => {

								return (
									<li key={item.name}>
										<div className="d-flex align-items-center border-bottom">
											<Link to={`${item.url}`}>
												<p className="dropdown-item">{item.name}</p>
											</Link>
											<i className="fa-solid fa-trash" onClick={()=>{deleteFav(item.name)}}></i>
										</div>
									</li>
								)
							})}
						</ul>
					</li>
				</div>
			</div>
		</nav>
	);
};

