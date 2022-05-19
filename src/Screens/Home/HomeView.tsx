import React from 'react'
import './Home.css'

type IProps = {
    info: number,
    changeInfo: Function
}

const HomeView:React.FC<IProps> = (props: IProps) => {
  return (
    <div className='containerDiv'>
      <div className='textDiv'>
        HomeView { props.info}
      </div>
      
      <button className='buttonClass' onClick={() => props.changeInfo()}>Add Info</button>
    </div>
  )
}

export default HomeView