import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    }
  }
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    })
  }
  onSearch = () => {
    // console.log(this.state.keyword)
    this.props.onSearch(this.state.keyword);
  }
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group">
          <input name=""
            type="text"
            className="form-control"
            placeholder="Nhập từ khóa..."
            name='keyword'
            onChange={this.onChange} />
          <span className="input-group-btn">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onSearch}
            >
              <span className="fa fa-search-plus mr-15"></span>Tìm</button>
          </span>
        </div>
      </div>
    );
  }
}

export default Search;
