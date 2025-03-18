import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import PeopleCard from "../components/PeopleCard.jsx";
import PlanetCard from "../components/PlanetCard.jsx";
import { Link } from "react-router-dom";
import VehiclesCard from "../components/VehiclesCard.jsx";
export const Home = () => {

	const { store, dispatch } = useGlobalReducer();


	const getPeople = async () => {

		try {
			const response = await fetch('https://swapi.dev/api/people');

			if (!response.ok) {
				throw new Error("Ocurrió un error al llamar el endpoint 'people' ");
			}

			const data = await response.json();
			const personajes = data.results;
			dispatch({ type: 'set_people_data', payload: personajes })


		} catch (error) {
			console.log(error);
		}
	};

	const getPlanets = async () => {

		try {
			const response = await fetch('https://swapi.dev/api/planets');

			if (!response.ok) {
				throw new Error("Ocurrió un error al llamar el endpoint 'planet' ");
			}

			const data = await response.json();
			const planetas = data.results
			dispatch({ type: 'set_planet_data', payload: planetas })

		} catch (error) {
			console.log(error);
		}
	};


	const getVehicles = async () => {

		try {
			const response = await fetch('https://swapi.dev/api/vehicles');

			if (!response.ok) {
				throw new Error("Ocurrió un error al llamar el endpoint 'planet' ");
			}

			const data = await response.json();
			const vehicles = data.results
			dispatch({ type: 'set_vehicles_data', payload: vehicles })

		} catch (error) {
			console.log(error);
		}
	};



	useEffect(() => {
		getPeople();
		getPlanets();
		getVehicles();
	}, []);
	//console.log(store.favorites)
	return (
		<div>
			<div className="mt-4 mx-5">
				<h1 className="text-warning pb-3">Characters</h1>
				<div className="text-center d-flex flex-row  my-3 overflow-x-auto gap-4">
					{store.people.map((item, index) => {

						return (
							<div >
								<PeopleCard key={index} item={item} />
							</div>
						)
					})}
				</div>
			</div>
			<div className="mt-5 mx-5">
				<h1 className="text-warning pb-3">Planets</h1>
				<div className="text-center d-flex flex-row  my-3 overflow-x-auto gap-4">
					{store.planets.map((item, index) => {
						return (
							<div>
								<PlanetCard key={index} item={item} />
							</div>
						)
					})}
				</div>
			</div>
			<div className="mt-5 mx-5">
				<h1 className="text-warning pb-3">Vehicles</h1>
				<div className="text-center d-flex flex-row  my-3 overflow-x-auto gap-4">
					{store.vehicles.map((item, index) => {
						return (
							<div>
								<VehiclesCard key={index} item={item} />
							</div>
						)
					})}
				</div>
			</div>
		</div>
	);
}; 