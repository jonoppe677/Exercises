import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };


  //this.addSomeCarrots = this.addSomeCarrots.bind(this);
  }

  addSomeCarrots = () => {
    this.setState({ items: [...this.state.items, {id: 5, value: "carrots", qty: 5}] });
  }
  addSomeStrawberries = () => {
    this.setState({ items: [...this.state.items, {id: 5, value: "strawberries", qty: 5}] });
  }
  addSomeYogurt = () => {
    this.setState({ items: [...this.state.items, {id: 5, value: "yogurt", qty: 5}] });
  }
  addSomeBeer = () => {
    this.setState({ items: [...this.state.items, {id: 5, value: "beer", qty: 5}] });
  }

  addSomeStuff = (stuffDescription) => {

    const Satunnainen = Math.floor(Math.random()*33);

    return () => {
      const searchResult = this.state.items.findIndex((element, index, array) => {
        if(element.value === stuffDescription) {
          return true;
        } else {
          return false;
        }
      });

   if(searchResult != -1) {
    console.log("Success, element with index" + searchResult + " is matching");
    let newItems = [...this.state.items];
    newItems[searchResult].qty += Satunnainen;

    this.setState({ items: newItems });

  } else {
     console.log("no milk :(");
    this.setState({
      items:
         [...this.state.items,
           {
            id: this.state.items.length +1,
            value: stuffDescription, qty: Satunnainen
           }
         ]
       });
    }
  }
}

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <button onClick={ this.addSomeStuff('carrots') }>add carrots</button>
      <button onClick={ this.addSomeStuff('strawberries', 5) }>add strawberries</button>
      <button onClick={ this.addSomeStuff('yogurt', 5) }>add yogurt</button>
      <button onClick={ this.addSomeStuff('beer', 5) }>add beer</button>
    </div>
  }
}

export default App;