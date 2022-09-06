import Bottom from '../Bottom/Bottom'
import style from './Calc.module.scss'
import React from 'react'

function Calc() {
  const [count,setCount] = React.useState('')
  const [fisrtCount,setFisrtCount] = React.useState('')
  const [secondCount,setSecondCount] = React.useState('')
  const [sign,setSign] = React.useState('')
  return (
    <div className={style.mainCalc}> 
        <div className={style.main}>
            <div className={style.top}>
                <div className={style.display}>{count}</div>
            </div>
            <div className={style.bottom}>
              <Bottom 
                count={count} 
                setCount={setCount} 
                fisrtCount={fisrtCount} 
                setFisrtCount={setFisrtCount} 
                secondCount={secondCount} 
                setSecondCount={setSecondCount}
                sign={sign}
                setSign={setSign}/>
            </div>
        </div>
    </div>
   
  )
}

export default Calc