export const setPoints = (pickPoint, dropPoint, journeyDate) => {
    localStorage.setItem("pickPoint", pickPoint);
    localStorage.setItem("dropPoint", dropPoint);
    localStorage.setItem("journeyDate", journeyDate);
}

export const removePoint = () => {
    localStorage.removeItem("pickPoint");
    localStorage.removeItem("dropPoint");
    localStorage.removeItem("journeyDate");
}

export const getPoints = () => {
    const pickPoint = localStorage.getItem("pickPoint");
    const dropPoint = localStorage.getItem("dropPoint");
    const journeyDate = localStorage.getItem("journeyDate");
    return { pickPoint, dropPoint, journeyDate };
}