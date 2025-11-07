import React, { useEffect, useState } from "react"
import "../styles/NavBar.css"

const NavLocation = () => {

  const [add, setAdd] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      const { latitude, longitude } = pos.coords;
      console.log(latitude, longitude)
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      fetch(url).then(res => res.json()).then(data => setAdd(data.address))
    })
  },
    [])
  console.log(add, "sfsh")

  return (
    <div className="nav-loc flex flex-col">
      <p>{add.suburb}</p>
      <p>{add.city}</p>
      {/* <p>{add.state}</p> */}
    </div>
  )
}

export default NavLocation
