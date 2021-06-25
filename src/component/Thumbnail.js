import React from "react"
import Images from '../data/images'

function Thumbnail(props) {
  return (
  <div>
    <img class = "thumbnail" >{props.source}</img>
  </div>
  );}

export default Thumbnail;