import React from 'react';

class TaskForm extends React.Component {
  onClose = () => {
    this.props.onClose()
  }
  render() {
    return (
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h3 className="panel-title">
            Thêm công việc
                    <span
              className="fa fa-times text-right"
              onClick={this.onClose}
            ></span>
          </h3>
        </div>

        <div className="panel-body">

          <form>
            <div className="form-group">
              <label>Tên</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Trạng thái</label>
              <select name="" className="form-control">
                <option value="">Ẩn</option>
                <option value="">Kích hoạt</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary mr-15">Submit</button>
            <button type="reset" className="btn btn-danger">Hủy bỏ</button>
          </form>

        </div>
      </div>

    );
  }
}

export default TaskForm;
