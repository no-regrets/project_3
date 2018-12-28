import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  // Gets all sessions
  getSessions: function() {
    return axios.get("/api/sessions");
  },
  // Gets the sessions with the given id
  getSession: function(id) {
    return axios.get("/api/sessions/" + id);
  },
  // Deletes the sessions with the given id
  deleteSession: function(id) {
    return axios.delete("/api/sessions/" + id);
  },
  // Saves a sessions to the database
  saveSession: function(sessionData) {
    return axios.post("/api/sessions", sessionData);
  },
  // Gets all drinks
  getDrinks: function() {
    return axios.get("/api/drinks");
  },
  // Gets the drinks with the given id
  getDrink: function(id) {
    return axios.get("/api/drinks/" + id);
  },
  // Deletes the drinks with the given id
  deleteDrink: function(id) {
    return axios.delete("/api/drinks/" + id);
  },
  // Saves a drinks to the database
  saveDrink: function(drinkData) {
    return axios.post("/api/drinks", drinkData);
  }

};
