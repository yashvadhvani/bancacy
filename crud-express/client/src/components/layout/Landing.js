import React, { Component } from "react";
import { Link } from "react-router-dom";
class Landing extends Component {

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">CRUD APP</h1>
                <p className="lead">
                  CRUD Application using react and node
                </p>
                <hr />
                <Link to="/register" className="btn btn-lg btn-info mr-2">
                  Create
                </Link>
                <Link to="/list" className="btn btn-lg btn-info mr-2">
                  List
                </Link>
                <Link to="/update" className="btn btn-lg btn-info mr-2">
                  Update
                </Link>
                <Link to="/delete" className="btn btn-lg btn-info mr-2">
                  Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
