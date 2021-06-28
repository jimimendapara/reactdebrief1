//this is a template folder for you to move into your src folder after you created a boilerplate
import React from 'react';

export class Dog extends React.Component {
  constructor(props){
    super(props);
    this.state={
      animal:"dog"
    }
    this.changeAnimal=this.changeAnimal.bind(this);
  }
  changeAnimal(){
    let newanimal = "";
    if(this.state.animal === "dog"){
      newanimal = "cat";
    }else{
      newanimal = "dog";
    }
    this.setState({animal: newanimal});
  }

  render() {
    return (
      <div>
       <img alt="dog" src={this.state.animal === "dog" ? "https://www.dogfoodadvisor.com/wp-content/uploads/2019/08/golden-retriever-puppy-343x335.jpg" : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Cat_Janna.jpg/150px-Cat_Janna.jpg"}
       ></img>
      <button onClick={this.changeAnimal}>I'm more of a {this.state.animal==="dog"?"cat":"dog"} person!</button>
      </div>
    );
  }
}

//https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Cat_Janna.jpg/150px-Cat_Janna.jpg

//"https://www.dogfoodadvisor.com/wp-content/uploads/2019/08/golden-retriever-puppy-343x335.jpg"