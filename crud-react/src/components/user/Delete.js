import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteUser } from "../../actions/userActions";

class Delete extends Component {
  constructor() {
    super();
    this.state = {
      errors: {}
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (Object.keys(nextProps.errors).length > 0) {
      return { errors: nextProps.errors };
    }
    else if (nextProps.user.data === '') {
      return nextProps.user;
    }
    return null;
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.deleteUser();
  }

  render() {
    let success;

    if (this.state.data === '') {
      success = <div className="alert alert-success">
        Delete successful on <strong>{new Date().toDateString()}</strong> At
       &nbsp;<strong>{new Date().getHours()} : {new Date().getMinutes()} </strong>
      </div>
    }
    return (
      <div className="register">
        <div className="container">
          {success}
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Delete</h1>
              <p className="lead text-center">Delete the Values</p>
              <form onSubmit={this.onSubmit}>
                <input type="submit" value="Delete" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Delete.propTypes = {
  deleteUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  user: state.user,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { deleteUser }
)(Delete);
