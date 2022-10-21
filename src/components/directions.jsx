import { React, useState, useEffect } from "react";
import { ImArrowUp, ImArrowRight, ImArrowDown, ImArrowLeft } from 'react-icons/im'
import { Link } from "react-router-dom";
import { possibleDirections, moveDirection } from "../services/functions";

import './directions.css'

const Directions = () => {
    const [directions, setDirections] = useState([]);

    useEffect(() => {
        loadDirections()
    }, [])



    const loadDirections = () => {
        setDirections(possibleDirections())
    }

    return (
        < div className="compass" >
            <>
                {directions.includes('North') &&
                    <Link id="North" to={`https://mazegame.plingot.com/Player/move?direction=North`}>
                        <ImArrowUp className="north" />
                    </Link>}
            </>
            <>
                {directions.includes('East') &&
                    <Link id="East" to={`https://mazegame.plingot.com/Player/move?direction=East`}>
                        <ImArrowRight className="east" />
                    </Link>}
            </>
            <>
                {directions.includes('South') &&
                    <Link id="South" to={`https://mazegame.plingot.com/Player/move?direction=South`}>
                        <ImArrowDown className="south" />
                    </Link>}
            </>

            <>
                {directions.includes('West') &&
                    <Link id="West" to={`https://mazegame.plingot.com/Player/move?direction=West`}>
                        <ImArrowLeft className="west" />
                    </Link>}
            </>


        </div >
    )
}

export default Directions