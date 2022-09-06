import { useState } from 'react'
import style from './Bottom.module.scss'

function Bottom({count,setCount,fisrtCount,setFisrtCount,secondCount,setSecondCount,sign,setSign}) {
    const [flag,setFlag]=useState(false)
    function toDisp(item){
        if(item.type==="Number" && count.length < 7 && flag==false){
            
            setCount(count + item.val)
            setFisrtCount(count + item.val)
            
        }else if(item.type==="func" && flag==false){
            setCount('')
            setSign(item.val)
            setFlag(true)

        }else if(item.type==="Number" && count.length < 7 && flag==true){
            setCount(count + item.val)
            setSecondCount(count + item.val)
        }
        else if(item.type==="res"){
            if(secondCount===''){
                setSecondCount(fisrtCount)
            }
            switch (sign){
                case('+'): setCount(((Number(fisrtCount*10) + Number(secondCount*10))/10));
                setFisrtCount(((Number(fisrtCount*10) + Number(secondCount*10))/10));
                break;
                case('-'): setCount(((Number(fisrtCount*10) - Number(secondCount*10))/10));
                setFisrtCount(((Number(fisrtCount*10) - Number(secondCount*10))/10));
                break;
                case('*'): setCount(Number(fisrtCount) * Number(secondCount));
                setFisrtCount(Number(fisrtCount) * Number(secondCount));
                break;
                case('/'): setCount(Number(fisrtCount) / Number(secondCount));
                setFisrtCount(Number(fisrtCount) / Number(secondCount));
                break;
            }
            setFlag(false)
        }else if(item.type==="AC"){
            setFisrtCount('')
            setSecondCount('')
            setCount('')
            setSign('')
            setFlag(false)
        }else if(item.type==="return" && flag==false){
            setFisrtCount(-fisrtCount)
        }else if(item.type==="return" && flag==true){
            setSecondCount(-secondCount)
        }else if(item.type==="proc" && flag==true){
            setSecondCount(secondCount*0.01)
        }
    }
    const arr = [{
        val:"AC",
        type:"AC",
        class:'grey'
    },{
        val:"+/-",
        type:"return",
        class:'grey'
    },{
        val:"%",
        type:"proc",
        class:'grey'
    },{
        val:"/",
        type:"func",
        class:'orange'
    },{
        val:"7",
        type:"Number",
        class:'black'
    },{
        val:"8",
        type:"Number",
        class:'black'
    },{
        val:"9",
        type:"Number",
        class:'black'
    },{
        val:"*",
        type:"func",
        class:'orange'
    },{
        val:"4",
        type:"Number",
        class:'black'
    },{
        val:"5",
        type:"Number",
        class:'black'
    },{
        val:"6",
        type:"Number",
        class:'black'
    },{
        val:"-",
        type:"func",
        class:'orange'
    },{
        val:"1",
        type:"Number",
        class:'black'
    },{
        val:"2",
        type:"Number",
        class:'black'
    },{
        val:"3",
        type:"Number",
        class:'black'
    },{
        val:"+",
        type:"func",
        class:'orange'
    },
    {
        val:"0",
        type:"Number",
        class:'black'
    },
    {
        val:"00",
        type:"Number",
        class:'black'
    },
    {
        val:".",
        type:"Number",
        class:'black'
    },
    {
        val:"=",
        type:"res",
        class:'orange'
    }


]
  return (
    <div className={style.Clava}>
        {arr.map(item=>
        (<div 
            className={item.class==='grey'
            ?style.grey:item.class==='orange'
            ?style.orange:style.black}
            onClick={()=>toDisp(item)}
            >
            {item.val}
        </div>))}
        </div>
  )
}

export default Bottom