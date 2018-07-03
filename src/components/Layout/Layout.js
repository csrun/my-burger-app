import React from 'react';

import Auxilliaire from '../../hoc/Auxilliaire';

const layout = ( props ) => (
  <Auxilliaire>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>
      {props.children}
    </main>
  </Auxilliaire>
);

export default layout;
