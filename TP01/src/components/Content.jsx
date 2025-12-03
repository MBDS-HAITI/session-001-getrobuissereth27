
export default function Content({ active }) {
    const map = {
        notes: "Contenu du menu : Notes",
        etudiants: "Contenu du menu : Étudiants",
        matieres: "Contenu du menu : Matières",
        apropos: "Contenu du menu : À propos",
    };
    return <div className="panel">{map[active] || "Sélectionnez un menu"}</div>;
}
