import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { useState } from 'react';
import {  Icon } from 'leaflet';
import "leaflet/dist/leaflet.css"
import data from '../../../data/skateboard-parks.json'


export const icon  = new Icon({
    iconUrl : "/skateboarding.svg",
    iconSize : [25, 25]
})

export default function AdherentMap() {
    const [aderentLoc, setAdherentLoc] = useState(null)
  
  return (
    <MapContainer center={[45.4, -75.7]} zoom={13} scrollWheelZoom={false}
    style={{width:'50%', height:'50vh'}}
    >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {data.features.map((park) => (
     <Marker
     key={park.properties.PARK_ID}
     position={[
        park.geometry.coordinates[1],
        park.geometry.coordinates[0]
     ]}
   onClick={()=>{setAdherentLoc(console.log("i've been clicked"))}}
    icon={icon}
     />
     ))}
     {aderentLoc && (
        <Popup
        position={[
            aderentLoc.geometry.coordinates[1],
            aderentLoc.geometry.coordinates[0]
         ]}
         onClose={()=>{
            setAdherentLoc(null)
         }}

         
        >
            Test
            {/* <div>
                <h2>{aderentLoc.properties.NAME}</h2>
                <p>{aderentLoc.properties.DESCRIPTIO}</p>
            </div> */}
        </Popup>
     )}
    

  </MapContainer>
  )
}

//   <span className="filtre">
// <NavLink className="link" to="#" onClick={toggleFiltre}>
// {/* <span>{actif ? "Actif" : "Tous"}</span> */}
// <i
//   className={
//     "fas fa-angle-up " + (filterOpened ? "reverse-icon" : "")
//   }
// ></i>
// </NavLink>
// <div
// className={
//   "c-dropdown-list " + (filterOpened ? "c-show" : "")
// }
// >
// <ul>
//   <li>
//     <Checkbox
//       value={4}
//       checked={actif}
//       onChange={handleCheck}
//       inputProps={{
//         "aria-label": "primary checkbox",
//       }}
//       sx={{ '& .MuiSvgIcon-root': { marginTop: 3 } }}
//     />
//     Actif
//   </li>
// </ul>
// </div>
// </span>
