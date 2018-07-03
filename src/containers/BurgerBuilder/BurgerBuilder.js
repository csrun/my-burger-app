import React, { Component } from 'react';

import Auxilliaire from '../../hoc/Auxilliaire';

class BurgerBuilder extends Component {
  render () {
    return (
      <Auxilliaire>
        <div>Burger</div>
        <div>Build Controls</div>
      </Auxilliaire>
    );
  }
}

export default BurgerBuilder;
