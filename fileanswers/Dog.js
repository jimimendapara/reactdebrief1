import React, { useState, useEffect } from 'react';
// Way to do it using Function Components
export const Dog = (props) => {

  const [animal, setAnimal] = useState('dog');

  const changeAnimal = () => {
    const newAnimal = animal === "dog" ? "cat" : "dog";
    console.log(newAnimal)
    setAnimal(newAnimal);
  }


  return (
    <div>
      <img alt="dog" src={animal === "dog" ? "https://www.dogfoodadvisor.com/wp-content/uploads/2019/08/golden-retriever-puppy-343x335.jpg" : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Cat_Janna.jpg/150px-Cat_Janna.jpg"}></img>
      <button onClick={changeAnimal}>I'm more of a {animal === "dog" ? "cat" : "dog"} person!</button>
    </div>
  );

}

// Way to do it using Class Components
export class Dog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { animal: "dog" };
    this.changeAnimal = this.changeAnimal.bind(this);
  }

  changeAnimal() {
    const newAnimal = this.state.animal === "dog" ? "cat" : "dog";
    console.log(newAnimal)
    this.setState({ animal: newAnimal });
  }

  render() {
    return (
      <div>
        <img alt="dog" src={this.state.animal === "dog" ? "https://www.dogfoodadvisor.com/wp-content/uploads/2019/08/golden-retriever-puppy-343x335.jpg" : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Cat_Janna.jpg/150px-Cat_Janna.jpg"}></img>
        <button onClick={this.changeAnimal}>I'm more of a {this.state.animal === "dog" ? "cat" : "dog"} person!</button>
      </div>
    );
  }
}

