import React, { useEffect, useState } from "react";

const SingleColor = ({ rgb, weight, index, color, hexa }) => {
  const [alert, setalert] = useState(false);
  console.log(rgb);

  useEffect(()=>{
    const timeOut= setTimeout(()=>{
      setalert(false)
    },2000)
    return()=>clearTimeout(timeOut)
  },[alert])

  const bcg = rgb.join(",");
  const hexaValue=`#${hexa}`
  return (
    <>
      <article className={`color`} style={{ backgroundColor: `rgb( ${bcg})` }} 
      onClick={()=>{setalert(true); navigator.clipboard.writeText(hexaValue)}}>
        <p className="percent-value">{weight}%</p>
        <p>{hexaValue}</p>
        {alert && <p className="alert">Copied to clipboard</p>}
      </article>
    </>
  );
};

export default SingleColor;
