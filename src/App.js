import React from 'react';
import './App.css';
import Overview from './components/Overview';

class App extends React.Component {
  constructor(){
    super()
      
    this.state = {
        task: "",
        task_list:[]
      }

    
  }


  addTask = () =>{
    this.setState((prevState)=>{
      return{task_list: [...prevState.task_list, this.state.task]}
    })
    this.setState({task:""})
  }

  setTask = (e) =>{
    this.setState({task: e.target.value})
  }



  render(){

    return(
      <div className='container'>
        <div>
          <input value={this.state.task} onChange={this.setTask}/>
          <button onClick={this.addTask}>Add</button>
        </div>
        {this.state.task_list.map((item,index) =>{
          return(
            <Overview key={index} title={item} />
          )
        })}
      </div>
    )
  }

}

export default App;
