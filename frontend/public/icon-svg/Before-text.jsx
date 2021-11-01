import React, { Fragment, useState } from 'react';


const BeforeText = ({className, before, coach, gym, challange, client}) => {

  let [active, activeText] = useState(false)

  return (
    <Fragment>
      {before ?

      active ?
        <img
          onMouseEnter={()=>{activeText(true)}}
          onMouseLeave={()=>{activeText(false)}}
          className={className}
          src='/gallery/before_after_hover.svg'
          alt="img"
        /> : 
        <img
          onMouseEnter={()=>{activeText(true)}}
          onMouseLeave={()=>{activeText(false)}}
          className={className}
          src="/gallery/after.svg" 
          alt="img"
        />
        : null
      }

      {coach ?
        active ?
          <img
            onMouseEnter={()=>{activeText(true)}}
            onMouseLeave={()=>{activeText(false)}}
            className={className}
            src='/gallery/trainers_hover.svg'
            alt="img"
          /> : 
          <img
            onMouseEnter={()=>{activeText(true)}}
            onMouseLeave={()=>{activeText(false)}}
            className={className}
            src="/gallery/trainer.svg" 
            alt="img"/>
        : null
      }

      {gym ?
      active ?
      <img
        onMouseEnter={()=>{activeText(true)}}
        onMouseLeave={()=>{activeText(false)}}
        className={className}
        src='/gallery/gym_hover.svg'
        alt="img"
      /> : 
      <img
        onMouseEnter={()=>{activeText(true)}}
        onMouseLeave={()=>{activeText(false)}}
        className={className}
        src="/gallery/gym.svg" 
        alt="img"/>
        : null
      }

      {challange ?
        active ?
        <img
          onMouseEnter={()=>{activeText(true)}}
          onMouseLeave={()=>{activeText(false)}}
          className={className}
          src='/gallery/challanges_hover.svg'
          alt="img"
        /> : 
        <img
        onMouseEnter={()=>{activeText(true)}}
        onMouseLeave={()=>{activeText(false)}}
        className={className}
        src="/gallery/challanges.svg" 
        alt="img"/>
        : null
      }

      {client ?
        active ?
        <img
          onMouseEnter={()=>{activeText(true)}}
          onMouseLeave={()=>{activeText(false)}}
          className={className}
          src='/gallery/clients_hover.svg'
          alt="img"
        /> : 
        <img
        onMouseEnter={()=>{activeText(true)}}
        onMouseLeave={()=>{activeText(false)}}
        className={className}
        src="/gallery/clients.svg" 
        alt="img"/>
        : null
      }

    </Fragment>

  )
}

export default BeforeText;
