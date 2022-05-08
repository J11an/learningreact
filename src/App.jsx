import React,{Component,Fragment} from 'react'
import CardList from './CardList'
import Searchbar from './Searchbar'
import './App.css'
import Scroll from './Scroll'


class App extends Component {

  constructor(){
  super()
  this.state = {
  robots : [],
  searchField: ''
  }
  }

  
  onSearchChange = (e) => {
    this.setState({searchField: e.target.value})
    
  }

  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>{
        return(response.json())
      })
      .then(users=>{
        this.setState({robots: users})
      });

  }
  render(){
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    if (this.state.robots.length == 0){
      return <h1>Loading...</h1>
    }
    else{

      return (
        <>
    <div className = "tc">
    <h1>Robo Friends</h1>
    <Searchbar searchChange = {this.onSearchChange}/>
    <Scroll>
    <CardList robots = {filteredRobots}/>
    </Scroll>
    </div>
    </>
  )
}
}
  
}

export default App;