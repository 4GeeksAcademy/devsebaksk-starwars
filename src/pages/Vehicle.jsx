import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Vehicle = () => {
    const [name, setName] = useState("");
    const [cargo, setCargo] = useState("");
    const [model, setModel] = useState("");
    const [speed, setSpeed] = useState("");
    const [consumables, setConsumables] = useState("");
    const [manufacturer, setManufacturer] = useState("");

    const params = useParams();
    const nameid = params.vehiclename;
    const { store } = useGlobalReducer();

    useEffect(() => {
        const vehicle = store.vehicles.find((vehicle) => vehicle.name == nameid);
        setName(vehicle.name);
        setModel(vehicle.model);
        setCargo(vehicle.cargo);
        setSpeed(vehicle.max_atmosphering_speed);
        setConsumables(vehicle.consumables);
        setManufacturer(vehicle.manufacturer);
    }, []);


    return (
        <div className="container text-center">
            <div className="d-flex justify-content-start mt-2">
                <Link to={"/"}><button type="button" className="btn btn-outline-light"><i className="fa-solid fa-arrow-left"></i></button></Link>
            </div>
            <div className="row g-0 bg-black rrounded-4 position-relative  mt-4 pb-5">
                <div className="col-md-6 mb-md-0 p-md-4 rounded-4">
                    <img src="https://picsum.photos/800/600" className="card-img-top rounded" alt="People card" />
                </div>
                <div className="col-md-6 mt-3 p-4 ps-md-0">
                    <h2 className="mt-0 text-warning mb-5 ">{name}</h2>
                    <p className="text-light fs-4">t is a long established fact that making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
                </div>
            </div>
            <div className="row border-bottom border-warning pt-3">

            </div>
            <div className="row text-light bg-black rounded-4 g-0 pb-2 mb-2 mt-3 pt-3">
                <div className="col">
                    <h4 className="text-warning">Name</h4>
                    <p className="fs-5 pt-1">{name}</p>
                </div>
                <div className="col">
                    <h4 className="text-warning">Cargo</h4>
                    <p className="fs-5 pt-1">{cargo}</p>
                </div>
                <div className="col">
                    <h4 className="text-warning">Model</h4>
                    <p className="fs-5 pt-1">{model}</p>
                </div>
                <div className="col">
                    <h4 className="text-warning">Speed</h4>
                    <p className="fs-5 pt-1">{speed}</p>
                </div>
                <div className="col">
                    <h4 className="text-warning">Consumables</h4>
                    <p className="fs-5 pt-1">{consumables}</p>
                </div>
                <div className="col">
                    <h4 className="text-warning">Manufacturer</h4>
                    <p className="fs-5 pt-1">{manufacturer}</p>
                </div>
            </div>
        </div>
    );
};
