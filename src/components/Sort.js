import React from 'react';

class Sort extends React.Component {
  render() {
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="btn-group">

          <div className="btn-group">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-toggle="dropdown"
            >
              Sắp xếp <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" role="menu">
              <li>
                <a href="/#">
                  <span className="fa fa-sort-alpha-asc mr-5"></span>Tên A-Z
                </a>
              </li>
              <li>
                <a href="/#">
                  <span className="fa fa-sort-alpha-desc mr-5"></span>Tên Z-A
                </a>
              </li>
              <li className="divider"></li>
              <li><a href="/#">Trạng thái kích hoạt</a></li>
              <li><a href="/#">Trạng thái ẩn</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Sort;
