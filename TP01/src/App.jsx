
import './App.css'
import {Hearder} from "./components/Hearder.jsx"
import {MainContent} from "./components/MainContent.jsx";
import {Footer} from "./components/Footer.jsx";
import data from "./data.json";
import { RandomItem } from "./TriFonction/RandomListe";
import NoteCard from "./components/DetailNote";



function App() {

    const randomNote = RandomItem(data);

  return (
      <>
        <Hearder/>
        <MainContent/>


          <div className="p-6 flex flex-col items-center gap-4">
              <h1 className="text-2xl font-bold">Note aléatoire</h1>
              <NoteCard note={randomNote} />
          </div>


        <Footer/>
      </>
  )
}
export default App
