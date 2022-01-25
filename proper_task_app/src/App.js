
import React, {Component} from'react'
import uniqid from'uniqid'
import Overview from './component/Overview'

class App extends Component {
  constructor(){
    super()
    this.state = {
      task:{
        text:'',
        id: uniqid()
          },
      tasks:[],
    }

  }

  handleChange = (e) =>{
    this.setState({
      task:{
        text:e.target.value,
        id: this.state.task.id,
      }
    });
  };

  onSubmitTask =(e) =>{
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task:{
        text:'',
        id: uniqid(),
      },
    });
  };
  deleteTask = (e) =>{
    const filteredArr = this.state.tasks.filter(x =>{
      if(x.id === e.target.name){
        return false
      }
      return true;
    })
    this.setState({
      tasks : filteredArr,
    });
  }

  render(){
    const {task,tasks} = this.state;


    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
            <label htmlFor="taskInput">Enter task</label>
            <input 
              type="text"
              id="taskInput"
              value={task.text}
              onChange={this.handleChange}
            ></input>
            <button type="submit">Add Task</button>
        </form>
        <Overview button={this.deleteTask}tasks={tasks}/>
  
      </div>
    );
  }
}

export default App;
