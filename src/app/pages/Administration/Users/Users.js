import React, { Component } from "react";
import Layout from "../../../components/SideBar/Layout";

export default class Users extends Component {
  render() {
    return (
      <Layout {...this.props}>
        <div>Users</div>
      </Layout>
    );
  }
}
