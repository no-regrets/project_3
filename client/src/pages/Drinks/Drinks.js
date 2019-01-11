import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class Drinks extends Component {
  // Setting our component's initial state
  state = {
    //HARDCODED - WE'LL NEED TO GET THIS FROM A POST-AUTH0 LOGIN & SESSION CREATION
    // session:{id:"5c38cb8234fd9705c9f4f096"}, 
    drinks: [],
    name: "",
    alcoholContent: 0
  };

  // When the component mounts, load all drinks and save them to this.state.drinks
  componentDidMount() {
    this.loadDrinks();
  }

  // Loads all drinks  and sets them to this.state.drinks
  loadDrinks = () => {
    API.getDrinks()
      .then(res =>
        this.setState({ drinks: res.data, name: "", alcoholContent: ""})
      )
      .catch(err => console.log(err));
  };

  // Deletes a drink from the database with a given id, then reloads drinks from the db
  deleteDrink = id => {
    API.deleteDrink(id)
      .then(res => this.loadDrinks())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the drink types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.savedrink method to save the drink data
  // Then reload drinks from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.alcoholContent) {
      API.saveDrink({
        name: this.state.name,
        alcoholContent: this.state.alcoholContent,
        sessionid: this.state.session.id,
      })
        .then(res => this.loadDrinks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="s6">
            <Jumbotron>
              <h1>Adding New Drink</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Name (required)"
              />
              <Input
                value={this.state.alcoholContent}
                onChange={this.handleInputChange}
                name="alcoholContent"
                placeholder="Alcohol Content (required)"
              />
              <FormBtn
                disabled={!(this.state.name && this.state.alcoholContent)}
                onClick={this.handleFormSubmit}
              >
                Submit Drink
              </FormBtn>
            </form>
          </Col>
          <Col size="s6">
            <Jumbotron>
              <h1>Drinks On My List</h1>
            </Jumbotron>
            {this.state.drinks.length ? (
              <List>
                {this.state.drinks.map(drink => {
                  return (
                    <ListItem key={drink._id}>
                      <a href={"/drinks/" + drink._id}>
                        <strong>
                          {drink.name} | {drink.alcoholContent}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteDrink(drink._id)} />
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

export default Drinks;
