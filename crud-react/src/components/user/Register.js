import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/userActions";
import TextFieldGroup from "../common/TextFieldGroup";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      job: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (Object.keys(nextProps.errors).length > 0) {
      return { errors: nextProps.errors };
    }
    else if (nextProps.user.data) {
      return nextProps.user.data;
    }

    return null;
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    if (this.validateForm()) {
      const newUser = {
        name: this.state.username,
        job: this.state.userjob
      };
      this.setState({
        username: "",
        userjob: ""
      });
      this.props.registerUser(newUser);

    }
  }
  validateForm() {

    let fields = this.state;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }
    if (!fields["userjob"]) {
      formIsValid = false;
      errors["userjob"] = "*Please enter your job.";
    }

    if (typeof fields["userjob"] !== "undefined") {
      if (!fields["userjob"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["userjob"] = "*Please enter alphabet characters only.";
      }
    }
    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  render() {
    const { errors } = this.state;
    const ID = this.state.id;
    let success;
    if (ID) {
      success = <div class="alert alert-success" role="alert">
        Registeration successful with Id: <strong>{this.state.id}</strong> on <strong>{new Date(this.state.createdAt).toDateString()}</strong> At
       &nbsp;<strong>{new Date(this.state.createdAt).getHours()} : {new Date(this.state.createdAt).getMinutes()} </strong>
      </div>
    }
    return (
      <div className="register">
        <div className="container">

          {success}
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Register</h1>
              <p className="lead text-center">Register the User</p>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  type="text"
                  placeholder="Enter Name"
                  name="username"
                  value={this.state.username}
                  onChange={this.onChange}
                  error={errors.username}
                />
                <TextFieldGroup
                  type="text"
                  placeholder="Enter Job"
                  name="userjob"
                  value={this.state.userjob}
                  onChange={this.onChange}
                  error={errors.userjob}
                />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  return {
    user: state.user,
    errors: state.errors
  };
};
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
