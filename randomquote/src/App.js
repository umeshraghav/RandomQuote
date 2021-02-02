import React from 'react'
 
import './App.css';
 
const arr = [[" Alistair Cockburn", "A user story is a promise for a conversation"],["Kent Beck","Extreme Programming Explained"],["Ron Jeffries","Three Cs"],[" Mike Cohn ","User Stories Applied: For Agile Software Development"]]
class App extends React.Component {

  constructor(props){
    super(props);
    let ind=Math.floor(Math.random()* arr.length)
    this.state={
      quote: arr[ind][1],
      author: arr[ind][0]
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    let ind=Math.floor(Math.random()* arr.length)
    return(    
      this.setState({
        quote:this.state.quote=arr[ind][1],
        author:this.state.quote=arr[ind][0]
      })
      
      
      )
  }
  render(){
    return (
      <div className="container">
              
              
                <div className="wrapper-box" id="quote-box">
                  <h3 className="quote" id="text"> "{this.state.quote}"</h3>
                  <p id="author" className="author">  - {this.state.author}</p>
                  <button className="btn" onClick={this.handleClick}  id="new-quote">New Quote</button>
                  <a href='https://twitter.com/intent/tweet?' className="lnk" target="_blank" id="tweet-quote">tweet-quote</a>
                </div>
                
              
      </div>
    )
  }
}

export default App;
