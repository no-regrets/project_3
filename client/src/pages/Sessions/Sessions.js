import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class Sessions extends Component {
  // Setting our component's initial state
  state = {
    sessions: [],
    drinkGoal: 0,
    maxBAC: 0,
    budget: 0,
  };

  // When the component mounts, load all sessions and save them to this.state.sessions
  componentDidMount() {
    this.loadSessions();
  }

  // Loads all sessions  and sets them to this.state.sessions
  loadSessions = () => {
    API.getSessions()
      .then(res =>
        this.setState({ sessions: res.data, drinkGoal: "", maxBAC: "", budget: ""})
      )
      .catch(err => console.log(err));
  };

  // Deletes a session from the database with a given id, then reloads sessions from the db
  deleteSession = id => {
    API.deleteSession(id)
      .then(res => this.loadSessions())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the session types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.savesession method to save the session data
  // Then reload sessions from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.drinkGoal && this.state.maxBAC && this.state.budget) {
      API.saveSession({
        drinkGoal: this.state.drinkGoal,
        maxBAC: this.state.maxBAC,
        budget: this.state.budget,
      })
        .then(res => this.loadSessions())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="s6">
            <Jumbotron>
              <h1>Adding New Session</h1>
            </Jumbotron>
            <form>

              <Input
                value={this.state.drinkGoal}
                onChange={this.handleInputChange}
                name="drinkGoal"
                placeholder="Drink Goal (required)"
              />
              <Input
                value={this.state.maxBAC}
                onChange={this.handleInputChange}
                name="maxBAC"
                placeholder="MaxBAC (required)"
              />
              <Input
                value={this.state.budget}
                onChange={this.handleInputChange}
                name="budget"
                placeholder="Budget (required)"
              />
              <FormBtn
                disabled={!(this.state.drinkGoal && this.state.maxBAC && this.state.budget)}
                onClick={this.handleFormSubmit}
              >
                Submit Session
              </FormBtn>
            </form>
          </Col>
          <Col size="s6">
            <Jumbotron>
              <h1>Sessions on the DB</h1>
            </Jumbotron>
            {this.state.sessions.length ? (
              <List>
                {this.state.sessions.map(session => {
                  return (
                    <ListItem key={session._id}>
                      <a href={"/sessions/" + session._id}>
                        <strong>
                        {session._id} |{session.drinkGoal} | {session.maxBAC} | {session.budget} 
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteSession(session._id)} />
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

export default Sessions;
