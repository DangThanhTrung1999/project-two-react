import React from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm: false
    }
  }
  componentWillMount() {
    if (localStorage && localStorage.getItem('tasks')) {
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: tasks
      })
    }
  }
  onGenerateData = () => {
    var randomstring = require("randomstring");

    var tasks = [
      {
        id: randomstring.generate(),
        name: "Hoc react js",
        status: true
      },
      {
        id: randomstring.generate(),
        name: "Hoc spring boot",
        status: false
      },
      {
        id: randomstring.generate(),
        name: "Hoc android",
        status: true
      }
    ];
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  onToggle = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm
    })
  }
  getFormChild = () => {
    this.setState({
      isDisplayForm: false
    })
  }
  onSubmitParent = (data) => {
    var randomstring = require("randomstring");

    var {tasks}= this.state;
    data.id=randomstring.generate();
    tasks.push(data);
    this.setState({
      tasks:tasks
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  onUpdateStatusApp=(id)=>{
  var {tasks}=this.state;
    var taskChange=tasks.map((task, index)=>{
      if(task.id===id){
        task.status=!task.status
      }
      return task;
    }
    )
    this.setState({
      tasks:taskChange
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  render() {
    var { tasks, isDisplayForm } = this.state;
    var elmTaskform = isDisplayForm ?
      <TaskForm
        onSubmit={this.onSubmitParent}
        onClose={this.getFormChild} />
      : '';
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản lý công việc</h1>
          <hr />
        </div>
        <div className="row">
          <div
            className=
            {isDisplayForm ?
              "col-xs-4 col-sm-4 col-md-4 col-lg-4" :
              ""}
          >
            {elmTaskform}
          </div>
          <div className=
            {isDisplayForm ?
              "col-xs-8 col-sm-8 col-md-8 col-lg-8" :
              "col-xs-12 col-sm-12 col-md-12 col-lg-12"}
          >

            <button
              type="button"
              className="btn btn-primary mr-15"
              onClick={this.onToggle}>
              <span className="fa fa-plus mr-15"></span>
              Thêm công việc
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.onGenerateData}>
              <span className="fa fa-plus mr-15"></span>
              Generate Data
            </button>
            <Control />

            <TaskList 
            tasks={tasks}
            onUpdateStatusList={this.onUpdateStatusApp} />

          </div>

        </div>

      </div>

    );
  }
}

export default App;
