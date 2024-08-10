export const setPoints = (pickPoint, dropPoint) => {
    localStorage.setItem("pickPoint", pickPoint)
    localStorage.setItem("dropPoint", dropPoint)
}

export const removePoint = () => {
    localStorage.removeItem("pickPoint");
    localStorage.removeItem("dropPoint");
}

export const getPoints = () => {
    const pickPoint = localStorage.getItem("pickPoint");
    const dropPoint = localStorage.getItem("dropPoint");
    return { pickPoint, dropPoint };
}