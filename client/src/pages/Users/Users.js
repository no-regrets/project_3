import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class Users extends Component {
  // Setting our component's initial state
  state = {
    users: [],
    username: "",
    email: "",
    password: "",
    sex: "",
    weight: ""
  };

  // When the component mounts, load all users and save them to this.state.users
  componentDidMount() {
    this.loadUsers();
  }

  // Loads all users  and sets them to this.state.users
  loadUsers = () => {
    API.getUsers()
      .then(res =>
        this.setState({ users: res.data, email: "", password: "", sex: "", weight: "" })
      )
      .catch(err => console.log(err));
  };

  // Deletes a user from the database with a given id, then reloads users from the db
  deleteUser = id => {
    API.deleteUser(id)
      .then(res => this.loadUsers())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveUser method to save the user data
  // Then reload users from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.email && this.state.password && this.state.sex && this.state.weight) {
      API.saveUser({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        sex: this.state.sex,
        weight: this.state.weight
      })
        .then(res => this.loadUsers())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="s6">
            <Jumbotron>
              <h1>Adding New User</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="User Name (required)"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email (required)"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password (required)"
              />
              <Input
                value={this.state.sex}
                onChange={this.handleInputChange}
                name="sex"
                placeholder="Sex (required)"
              />
              <Input
                value={this.state.weight}
                onChange={this.handleInputChange}
                name="weight"
                placeholder="Weight (required)"
              />
              <FormBtn
                disabled={!(this.state.username && this.state.email && this.state.password && this.state.sex && this.state.weight)}
                onClick={this.handleFormSubmit}
              >
                Submit User
              </FormBtn>
            </form>
          </Col>
          <Col size="s6">
            <Jumbotron>
              <h1>Users On My List</h1>
            </Jumbotron>
            {this.state.users.length ? (
              <List>
                {this.state.users.map(user => {
                  return (
                    <ListItem key={user._id}>
                      <a href={"/users/" + user._id}>
                        <strong>
                          {user.username} | {user.email} | {user.password} | {user.sex} | {user.weight}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteUser(user._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Users;
