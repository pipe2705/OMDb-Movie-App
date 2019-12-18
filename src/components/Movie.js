import React, { Component } from "react";

class Movie extends Component {
  state = {
    img: "",
    actors: ""
  };
  movieTitle = this.props.movie.Title;

  componentDidMount = () => {};

  render() {
    fetch(
      `http://www.omdbapi.com/?i=${this.props.movie.imdbID}&apikey=4150825c`
    )
      .then(res => res.json())
      .then(data =>
        this.setState({
          img: data.Poster,
          actors: data.Actors
        })
      )
      .catch(err => console.log("Could not get a movie per actor", err));
    return (
      <div key={this.props.movie.key}>
        <span>
          {" "}
          Titulo de la Pelicula <strong>{this.props.movie.Title}</strong>{" "}
        </span>
        <p>
          {" "}
          Actores: <strong>{this.state.actors}</strong>
        </p>
        <img
          className="img"
          src={this.state.img}
          alt={`Poster for '${this.movieTitle}' was not provided`}
        />
      </div>
    );
  }
}

export default Movie;
