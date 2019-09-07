import React from 'react';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      status: false
    }
  }
  onChangeDisplay = () => {
    this.props.onClose()
  }
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if (name === 'status') {
      value = target.value === 'true' ? true : false
    }
    this.setState({
      [name]: value
    })
  }
  onSubmitChild = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.onChangeDisplay()
  }
  onClear = () => {
    this.setState({
      name: '',
      status: false
    })
  }
  componentWillMount() {
    if (this.props.task) {
      this.setState({
        id: this.props.task.id,
        name: this.props.task.name,
        status: this.props.task.id
      })
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps && nextProps.task){
      this.setState({
        id: nextProps.task.id,
        name: nextProps.task.name,
        status: nextProps.task.id
      });
    }
  }
  render() {
    var {id}=this.state;
    return (
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h3 className="panel-title">
            {id!==''?'Cập nhật công việc':'Thêm công việc'}
                    <span
              className="fa fa-times text-right"
              onClick={this.onChangeDisplay}
            ></span>
          </h3>
        </div>

        <div className="panel-body">

          <form onSubmit={this.onSubmitChild}>
            <div className="form-group">
              <label>Tên</label>
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={this.onChange}
                value={this.state.name} />
            </div>
            <div className="form-group">
              <label>Trạng thái</label>
              <select
                name="status"
                className="form-control"
                onChange={this.onChange}
                value={this.state.status}
              >
                <option value={false}>Ẩn</option>
                <option value={true}>Kích hoạt</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary mr-15">Submit</button>
            <button
              type="reset"
              className="btn btn-danger"
              onClick={this.onClear}>Hủy bỏ</button>
          </form>

        </div>
      </div>

    );
  }
}

export default TaskForm;
