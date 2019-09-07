import React from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import { file } from '@babel/types';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm: false,
      taskEditing: '',
      filter: {
        name: '',
        status: -1
      }
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
      isDisplayForm: !this.state.isDisplayForm,
      taskEditing: null
    })
  }
  getFormChild = () => {
    this.setState({
      isDisplayForm: false
    })
  }
  onSubmit = (data) => {
    var randomstring = require("randomstring");
    var { tasks } = this.state;
    if (data.id === '') {
      data.id = randomstring.generate();
      tasks.push(data);
    } else {
      var index = this.findIndex(data.id);
      tasks[index] = data;
    }
    this.setState({
      tasks: tasks,
      taskEditing: null
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  onUpdateStatusApp = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
    }
    this.setState({
      tasks: tasks
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  findIndex = (id) => {
    var { tasks } = this.state;
    var result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id)
        result = index
    });
    return result
  }
  onDelete = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if (index !== -1) {
      tasks.splice(index, 1);
    }
    this.setState({
      tasks: tasks
    })
    this.getFormChild();
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  onShowForm = () => {
    this.setState({
      isDisplayForm: true
    })
  }
  onUpdate = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    console.log(index);
    var taskEditing = tasks[index];
    this.setState({
      taskEditing: taskEditing
    })
    this.onShowForm();
  }
  onFilter = (filterName, filterStatus) => {
    filterStatus = +filterStatus;
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus
      }
    })
  }
  render() {
    var { tasks, isDisplayForm, taskEditing, filter } = this.state;
    if (filter) {
      if (filter.name) {
        tasks = tasks.filter((task) => {
          return task.name.toLowerCase().indexOf(filter.name) !== -1;
        })
      }
      tasks = tasks.filter((task) => {
        if (filter.status === -1) {
          return task;
        }
        return task.status === (filter.status === 1 ? true : false);
      })
    }
    var elmTaskform = isDisplayForm ?
      <TaskForm
        onSubmit={this.onSubmit}
        onClose={this.getFormChild}
        task={taskEditing} />
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
              onUpdateStatusList={this.onUpdateStatusApp}
              onDelete={this.onDelete}
              onUpdate={this.onUpdate}
              onFilter={this.onFilter} />

          </div>

        </div>

      </div>

    );
  }
}

export default App;
