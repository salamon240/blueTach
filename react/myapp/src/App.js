import "./App.css";
import react from "react";

class FilmItem extends react.Component {
  render() {
    return (
      <li>
        <a href={this.props.url}>{this.props.url}</a>
      </li>
    );
  }
}

class StartWars extends react.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      height: null,
      homeworld: null,
      films: [],
      loaedCarector: false,
    };
  }
  getNewCerecter = () => {
    const randName = Math.floor(Math.random() * 88) + 1;
    console.log(randName);
    const url = `https://raw.githubusercontent.com/akabab/starwars-api/master/api/id/${randName}.json`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        this.setState({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          species: data.species,
          image: data.image,
          gender: data.gender,
          loaedCarector: true,
        });
      });
    console.log("get new cerectoer");
  };

  render() {
   /* const movies=this.state.films.map((url,i)=>{
        return <FilmItem key={i} url={url}/>
    })*/
    return (
      <>
        {this.state.loaedCarector && (
          <>
          <img src={this.state.image}></img>
            <h1>name : {this.state.name}</h1>
            <p>height :{this.state.height} cm</p>
            <p>species : {this.state.species} </p>
            <p>gender : {this.state.gender} </p>
            <p>
            homeworld : {this.state.homeworld}
            </p>
            <ul>{}</ul>
          </>
        )}

        <button type="button" className="btn" onClick={this.getNewCerecter}>
          get carecter
        </button>
      </>
    );
  }
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StartWars />
      </header>
    </div>
  );
}

export default App;
