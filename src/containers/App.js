import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import logo from './logo.jpg';

class App extends Component {

  constructor() {
  	super()
  	this.state = {
      pokemonDetail : [],
      searchfield: ''
  	}
  }

  async getData() {
    try{
        const url = 'https://pokeapi.co/api/v2/pokemon';
        const limit = '?limit=115';
        const response = await fetch(url + limit);
        const data = await response.json();
        return data.results;
    } catch (err) {
        console.log('error in getData', err);
    }
  }

  async getData2 (pokemonList) {
    try {
      const data = await Promise.all(
        pokemonList.map(async ({name, url}) => {
          const response = await fetch(url);
          return response.json();
        }),
      );
      // console.log("test", data);
      return data;
    } catch (err) {
      console.log("ooooooops", err);
    }
  };

  //by using async run, we can store the result returned from fetch into variable to be used
  //within the run function
  //therefore we can setState
  //if we simply call this.getData() in componentDidMount
  //both fetch could be run aschronyously therefore throwing error
  //by using run with async, we force the data and data2 to be run in synchronse fashion.
  async run() {
    let data = await this.getData();
    let data2 = await this.getData2(data);
    this.setState({pokemonDetail : data2});
  }

  componentDidMount(){
    this.run();
  }

  //create a function change the input
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
  }

  render() {
    const { pokemonDetail, searchfield } = this.state;
    const filteredPokemon = pokemonDetail.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    	return !pokemonDetail.length ?
        <h1 className='f1 tc vc'>Loading</h1> //this can be a loading screen
        :
        (
        <div className = "tc">
      		<div className ="bg-yellow">
            <img className = "w-10 ma0" alt="pokemon" src={logo}/>
          </div>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList className="w-100" pokemons = {filteredPokemon} />
      		</Scroll>
        </div>
        )
  }
}
        // <CardList pokemon={pokemonList} />
export default App;
