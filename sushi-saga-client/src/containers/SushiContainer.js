import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushi.map(sushi => {
            return <Sushi key={sushi.id} sushi={{...sushi}} handleSushiClick={props.handleSushiClick}  />
          })
        }
        <MoreButton resetVisibility={props.resetVisibility} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
