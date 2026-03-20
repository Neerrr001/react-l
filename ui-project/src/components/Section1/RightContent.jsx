import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id="right" className='h-full flex overflow-x-auto flex-nowrap gap-10 p-6 w-2/3 bg-orange-50 '>
      {props.users.map(function(elem, idx){
        
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} />
      })}
    </div>
  )
}

export default RightContent
