import React from 'react';

import Auxilliaire from '../../hoc/Auxilliaire';
import classes from './Layout.css';

const layout = (props) => (
  <Auxilliaire>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Auxilliaire>
);

export default layout;
