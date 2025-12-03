
import NotesTable from "./tables/NotesTable";
import EtudiantsTable from "./tables/EtudiantsTable";
import MatieresTable from "./tables/MatieresTable";
import Apropos from "./tables/Apropos";

export default function Content({ active }) {
    switch (active) {
        case "notes": return <NotesTable />;
        case "etudiants": return <EtudiantsTable />;
        case "matieres": return <MatieresTable />;
        case "apropos": return <Apropos />;
        default: return <div className="panel">Sélectionnez un menu</div>;
    }
}
