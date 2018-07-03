import React, { Component } from 'react';

import Auxilliaire from '../../hoc/Auxilliaire';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  render () {
    return (
      <Auxilliaire>
        <Burger />
        <div>Build Controls</div>
      </Auxilliaire>
    );
  }
}

export default BurgerBuilder;
