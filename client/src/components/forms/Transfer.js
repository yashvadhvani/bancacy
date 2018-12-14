import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { transferTokens } from "../../actions/transferActions";
const jwt = require("jsonwebtoken");

class Transfer extends Component {
  constructor() {
    super();
    this.state = {
      from: "",
      to: "",
      amount: "",
      message: "",
      password: "",
      bal: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    let token = jwt.decode(localStorage["jwtToken"].replace("Bearer ", ""));
    this.setState({ from: token.email });
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const data = {
      from: this.state.from,
      to: this.state.to,
      amount: this.state.amount,
      message: this.state.message,
      password: this.state.password
    };
    this.props.transferTokens(data);
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="login">
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
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Password</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Transfer.propTypes = {
  transferTokens: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  transfer: state.transfer,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { transferTokens }
)(Transfer);
