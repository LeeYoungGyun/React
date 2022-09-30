import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movieAxios: [],
  };
  getMovie = async () => {
    const movieAxios = await axios.get(
      "https://yts.mx/api/v2/list_movies.json"
    );
  };
  componentDidMount() {
    this.getMovie();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
