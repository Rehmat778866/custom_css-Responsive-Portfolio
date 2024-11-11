
import React from 'react'
interface propsType{
    title:string;
}

const Heading: React.FC<propsType> = ({title}) => {
  return (
    <div id='headingDiv' >
        <p id='headingPara'>{title}</p>
      
    </div>
  )
}

export default Heading
