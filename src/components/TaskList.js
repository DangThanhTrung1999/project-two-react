import React from 'react';
import TaskItem from './TaskItem';

class TaskList extends React.Component {
  render() {
    var { tasks } = this.props;
    var elmTaskItem = tasks.map((task, index) => {
      return <TaskItem 
      key={task.id} 
      index={index} 
      task={task}
      onUpdateStatusItem={this.props.onUpdateStatusList}
      ></TaskItem>
    });
    return (

      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên</th>
                <th>Trạng thái</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>
                  <input type="text" className="form-control"></input>
                </td>
                <td>
                  <select className="form-control">
                    <option value="">Tất cả</option>
                    <option value="">Kích hoạt</option>
                    <option value="">Ẩn</option>
                  </select>
                </td>
                <td></td>
              </tr>
              {elmTaskItem}
            </tbody>
          </table>

        </div>
      </div>

    );
  }
}

export default TaskList;
