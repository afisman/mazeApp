import axios from 'axios'



const gameStart = async () => {
    let res = await axios.get('https://mazegame.plingot.com/Game/start');
    console.log(`Status: ${res.status}`);
}

const possibleDirections = async () => {
    let possiblePaths = []
    const petition = await axios.get('https://mazegame.plingot.com/Room/current');
    const possDirections = petition.paths.forEach(e => {
        possiblePaths.push(e.direction)
    })
    return possiblePaths
}

const moveDirection = async (path) => {

    const directiontoMove = await axios.put(`https://mazegame.plingot.com/Player/move?direction=${path}`)
}

export {
    gameStart, possibleDirections, moveDirection
}