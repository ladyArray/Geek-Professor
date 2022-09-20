import { Temas } from "../../data/Temas";

export function getTemaByName(name) {
    return Temas.find(element => element.nombre.toLowerCase() == name.toLowerCase())
}