import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import supervisionService from "../Context/SupervisionService"
import Checkbox from '@mui/material/Checkbox';

const Réseau = () =>{
  // Tous les adherents
  const [adherents, setAdherents] = useState([])
  // Element recherché
  const [search, setSearch] = useState("")
  // Etat de chargement d'un adherent
  const [onloading, setOnLoading] = useState(false)
  // Adherent selectionné
  const [selectedAdherent, setSelectedAdherent] = useState(0)
  // Etat d'ouverture d'un filtre
  const [filterOpened, setFilterOpened] = useState(false)
  // Filtre (Actif pour le moment)
  const [actif, setActif] = useState(true)
  // Chargement de la liste des adherents
  const [loadingscreen, setLoadingscreen] = useState(true)

  useEffect(() => {
    setTimeout(() => {
        getAllAdherent(search, actif)
        setLoadingscreen(false)
    }, 1000)
}, [search, actif])

const getAllAdherent = async (search, actif) => {
    await supervisionService.getAllAdherent(search, actif)
        .then(
            response => setAdherents(response)
        )
}

const handleChange = (event) => {
  const inputValue = event.target.value;
  setSearch(inputValue);
};
const toggleFiltre = () => {
  setFilterOpened(!filterOpened);
};

const handleCheck = () => {
  setActif(!actif);
};




  return (
   <div className="container">
    <div className="mes-aderent">
      <h1>Mes Adherent</h1>
      <div className="search-section">
        <div className="searc-bar">
        <i className="fas fa-search"></i>
                <input
                  className="search"
                  name="search"
                  type="search"
                  placeholder="Recherche..."
                  // onChange={(event) => {
                  //   handleChange(event);
                  // }}
                  autoComplete="off"
                />
        </div>
        <span className="filtre">
                <NavLink className="link" to="#" onClick={toggleFiltre}>
                  <span>{actif ? "Actif" : "Tous"}</span>
                  <i
                    className={
                      "fas fa-angle-up " + (filterOpened ? "reverse-icon" : "")
                    }
                  ></i>
                </NavLink>
                <div
                  className={
                    "c-dropdown-list " + (filterOpened ? "c-show" : "")
                  }
                >
                  <ul>
                    <li>
                      <Checkbox
                        value={4}
                        checked={actif}
                        onChange={handleCheck}
                        inputProps={{
                          "aria-label": "primary checkbox",
                        }}
                      />
                      Actif
                    </li>
                  </ul>
                </div>
              </span>
              <div className="aderent-list">

                <ul>
                  <li></li>
                </ul>
              </div>
      </div>
    </div>
   </div>
  );
}

export default Réseau; 