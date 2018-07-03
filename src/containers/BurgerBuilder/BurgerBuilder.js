import React, { Component } from 'react';

import Auxilliaire from '../../hoc/Auxilliaire';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {...}
  // }
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    }
  }

  render () {
    return (
      <Auxilliaire>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Auxilliaire>
    );
  }
}

export default BurgerBuilder;
