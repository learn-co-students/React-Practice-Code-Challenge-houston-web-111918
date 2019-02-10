import React, { Fragment } from 'react'

const Sushi = (props) => {
  console.log(props.sushi.img_url)
  let { sushi } = props
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={/* Give me a callback! */  null}>
        { sushi.eaten
          ? null
          : <img src={sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi