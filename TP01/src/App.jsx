
import './App.css'
import {useState} from "react";
import Content from "./components/Content.jsx";
import {Menu} from "@mui/material";



const MENU_ITEMS = [
    { key: "notes", label: "Notes" },
    { key: "etudiants", label: "Étudiants" },
    { key: "matieres", label: "Matières" },
    { key: "apropos", label: "À propos" },
];


function App() {

    const [active, setActive] = useState(MENU_ITEMS[0].key);
    return (
        <>

            <div className="app">
                <aside className="sidebar">
                    <Menu items={MENU_ITEMS} active={active} onSelect={setActive}/>
                </aside>
                <main className="content">
                    <Content active={active}/>
                </main>
            </div>


        </>
    );
}
export default App
