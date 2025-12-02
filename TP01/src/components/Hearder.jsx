

export function Hearder(){

    const logoUrl = '/logo.jpg';
    return (
        <header className="app-header">
            <img src={logoUrl} alt="Logo de ma Formation" className="header-logo" />
            <h1 className="header-title">Introduction à React</h1>
            <p className="header-subtitle">A la découverte des premières notions de React</p>
        </header>
    );
}