import "../../src/App.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Services from "./Services.js";
import Slider from "./Slider.js";
import Pluses from "./Pluses.js";
import About from "./About.js";
import Info from "./Info.js";
import Price from "./Price.js";
import Footer from "./Footer.js";
import PopupServices from "./PopupServices.js";
import PopupPrice from "./PopupPrice.js";
import PopupSubmit from "./PopupSubmit";
import Cases from "./Cases"
import { useState } from "react";
import {
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
function App() {
const [IsAccountingPopupOpen, setIsAccountingPopupOpen] = useState(false);
const [IsTeamPopupOpen, setIsTeamPopupOpen] = useState(false);
const [IsSmmPopupOpen, setIsSmmPopupOpen] = useState(false);
const [IsEducationPopupOpen, setIsEducationPopupOpen] = useState(false);
const [IsItPopupOpen, setIsItPopupOpen] = useState(false);
const [IsJusticePopupOpen, setIsJusticePopupOpen] = useState(false);
const [IsPricePopupOpen, setIsPricePopupOpen] = useState(false);

const handleAccountingClick=()=>{
    setIsAccountingPopupOpen(true)
}
const handleTeamClick=()=>{
    setIsTeamPopupOpen(true)
}
const handleSmmClick=()=>{
    setIsSmmPopupOpen(true)
}
const handleEducationClick=()=>{
    setIsEducationPopupOpen(true)
}
const handleItClick=()=>{
    setIsItPopupOpen(true)
}
const handleJusticeClick=()=>{
    setIsJusticePopupOpen(true)
}
const handlePriceClick=()=>{
    setIsPricePopupOpen(true)
}
const closeAllPopups=()=>{
    setIsAccountingPopupOpen(false)
    setIsTeamPopupOpen(false)
    setIsSmmPopupOpen(false)
    setIsEducationPopupOpen(false)
    setIsItPopupOpen(false)
    setIsJusticePopupOpen(false)
    setIsPricePopupOpen(false)
}

  return (
    
    <div className="App">
      <div className="page">
        <main className="main">
          <></>
          <Header/>
          <Main />
          <Services
            onAccountingClick={handleAccountingClick}
            onTeamClick={handleTeamClick}
            onSmmClick={handleSmmClick}
            onEducationClick={handleEducationClick}
            onItClick={handleItClick}
            onJusticeClick={handleJusticeClick}
          />
          <Slider />
          <Pluses />
          <About />
          <Info/>
          <Price
            onClose={closeAllPopups}
            onPriceClick={handlePriceClick}
          />
          <Footer />
          <PopupServices
            onClose={closeAllPopups}
            isOpenAccounting={IsAccountingPopupOpen}
            isOpenTeam={IsTeamPopupOpen}
            isOpenSmm={IsSmmPopupOpen}
            isOpenEducation={IsEducationPopupOpen}
            isOpenIt={IsItPopupOpen}
            isOpenJustice={IsJusticePopupOpen}
          />
          <PopupPrice
            onClose={closeAllPopups}
            isOpen={IsPricePopupOpen}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
