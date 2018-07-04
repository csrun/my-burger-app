import React from 'react';

import classes from './Modal.css';
import Auxilliaire from '../../../hoc/Auxilliaire';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
  <Auxilliaire>
    <Backdrop show={props.show} clicked={props.modalClosed}/>
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}>
      {props.children}
    </div>
  </Auxilliaire>
);

export default modal;
