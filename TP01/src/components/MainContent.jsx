import {Todo} from "./Mycomponents.jsx";

export function MainContent(){
    const jour = "Lundi";
    const mois = "Decembre";
    const annee = 2025;
    const heure = 5;
    const minute = 25;
    const second = 40;

    return(
        <h2>
            Bonjour, on est le {jour}, {mois}, {annee} et il est {heure}:{minute}:{second}
        </h2>
    );
}
