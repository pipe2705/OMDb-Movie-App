import React, { Component } from "react";
import Movies from "./Movies";
import "../App.css";

class SearchContainer extends Component {
  state = {
    movieTitle: " ",
    arrayOfTitles: []
  };

  onSubmit = e => {
    let searchString = this.state.movieTitle.trim();
    e.preventDefault();
    fetch(`http://www.omdbapi.com/?s="${searchString}"&apikey=9881f046`)
      .then(res => res.json())
      .then(data => this.setState({ arrayOfTitles: data.Search }))
      .catch(err => console.log("Can't get all Movies", err));
  };

  //use e for event
  onChange = e => {
    this.setState({ movieTitle: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h4> Busca una Pelicula aqui..... </h4>
        <input
          onChange={this.onChange}
          type="text"
          placeholder="Escribe el nombre de la Pelicula aqui"
        />
        <button type="submit">Buscar</button>
        {this.state.arrayOfTitles !== undefined ? (
          <Movies movies={this.state.arrayOfTitles} />
        ) : (
          (alert("No encontramos una pelicula"),
          this.setState({ arrayOfTitles: [] }))
        )}
      </form>
    );
  }
}

export default SearchContainer;
