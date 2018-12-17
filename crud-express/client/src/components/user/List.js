import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { listUser } from "../../actions/userActions";

class List extends Component {
  constructor() {
    super();
    this.state = {
      page: '',
      per_page: '',
      total: '',
      total_pages: '',
      data: []
    }
  }

  componentDidMount() {
    if (this.state.page === '')
      this.props.listUser(1)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.user.data) {
      return nextProps.user.data;
    }
    return {
      page: '',
      per_page: '',
      total: '',
      total_pages: '',
      data: []
    };
  }

  handleClick(e, page) {
    e.preventDefault();
    this.props.listUser(page);

  }

  render() {
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">List Users</h1>
              <p className="lead text-center">
                Watch list of user
              </p>
              <form onSubmit={this.onSubmit}>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Avatar</th>
                    </tr>
                  </thead>
                  <tbody>

                    {this.state.data.length > 0 ?
                      this.state.data.map((ele, i) => <tr key={i}>
                        <th key={ele.id}>{ele.id}</th>
                        <td key={ele.first_name}>{ele.first_name}</td>
                        <td key={ele.last_name}>{ele.last_name}</td>
                        <td key={ele.avatar}> <img src={ele.avatar} width='40' height='40' className="rounded-circle" alt='gravatar' /></td>
                      </tr>) : null}
                  </tbody>
                </table>
                <button type="button" class="btn btn-info btn-md" onClick={(e) => this.handleClick(e, this.state.page - 1)} disabled={parseInt(this.state.page) === 1 ? 'disabled' : ''}>Prev</button>&nbsp;
                <button type="button" class="btn btn-info btn-md" onClick={(e) => this.handleClick(e, this.state.page + 1)} disabled={parseInt(this.state.page) === parseInt(this.state.total_pages) ? 'disabled' : ''} >Next</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
List.propTypes = {
  listUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  return {
    user: state.user,
    errors: state.errors
  }
};
export default connect(
  mapStateToProps,
  { listUser }
)(List);