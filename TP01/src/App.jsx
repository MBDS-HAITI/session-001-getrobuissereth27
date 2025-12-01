
import './App.css'




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


export function   MainContent(){
    return(
        <h2>Ici, nous afficherons des informations interessantes :) </h2>
    );
}

export function  Footer(){
    return(
        <di >
            <footer >
                <h3>Tous droits réservés - BUISSERETH Getro</h3>
            </footer>
        </di>
    )
}

function App() {

  return (
      <>
        <Hearder/>
        <MainContent/>
        <Footer/>
      </>
  )
}
export default App
