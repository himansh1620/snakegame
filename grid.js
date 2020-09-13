const gridPosition = 21

export function randomGridPosition(){
    return{
        x: Math.floor(Math.random() * gridPosition + 1),
        y: Math.floor(Math.random() * gridPosition + 1)
    }
}

export function outsideGrid(position) {
    return(
        position.x < 1 || position.x > gridPosition ||
        position.y < 1 || position.y > gridPosition
    )
}