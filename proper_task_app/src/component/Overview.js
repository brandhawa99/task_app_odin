
import React from 'react'

const Overview = (props) =>{

    const {tasks,button} = props;

    return (

        <ul>
            {tasks.map((task,index)=>{
                return <li key={task.id} style={{display:"flex", gap:"5px", alignItems:'center'}}>
                        <strong>{index+1}</strong> {task.text}
                        <button key={task.index} name={task.id} onClick={button} style={{width:"20px",height:"20px",display:'flex',justifyContent:'center'}}>&times;</button>
                    </li>
            })}
        </ul>
    )
}

export default Overview