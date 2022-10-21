import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import { gameStart } from "../services/functions";


const Start = () => {



    useEffect(() => {
        gameStart()
    }, [])

    return (
        < div  >
            <Link id="start-button" to='https://mazegame.plingot.com/Room/current'>
                Start Game
            </Link>
        </div >
    )
}

export default Start