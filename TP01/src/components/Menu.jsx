export default function Menu({ items, active, onSelect }) {
    return (
        <nav className="menu">
            {items.map((item) => (
                <button
                    key={item.key}
                    className={`menu-item ${active === item.key ? "active" : ""}`}
                    onClick={() => onSelect(item.key)}
                >
                    {item.label}
                </button>
            ))}
        </nav>
    );
}
