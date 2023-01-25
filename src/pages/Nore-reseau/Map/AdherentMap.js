import React from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

export default function AdherentMap() {
    // const center = [51.505, -0.09]
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[51.505, -0.09]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
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
