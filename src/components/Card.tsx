import React from 'react'
import Image from 'next/image';

interface propsType{
  title:string;
  desc:string;
  img:string;
  tags: string[];

}

const Card:React.FC<propsType> = ({title ,desc, img, tags}) => {
  return (
    <div id='cardDiv' data-aos="zoom-in-up">
      <div id='cardDiv2' >
        < Image id='cardImage'
        src={img}
        width={350}
        height={450}
        alt={title} 
        />
      </div>

      <div id='cardDiv3'>
        <div id='cardDiv4'>{title}</div>
        <div>{desc}</div>
        <div>
          {tags.map((el) =>(
          <div className='tags' key={el}>
            {el}

          </div>))}
        </div>
      </div>

    </div>
  )
}

export default Card
