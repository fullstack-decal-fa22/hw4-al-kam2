import React from 'react';
import Color from './Color'
/* Add any imports you think you might need here! */

const Menu = (props) => { 

    return (
      <div className="colorOptions">
          <Color color = 'pink' handleClick = {props.function}/>
          <Color color = 'red' handleClick = {props.function}/>
          <Color color = 'blue' handleClick = {props.function}/>
          <Color color = 'green' handleClick = {props.function}/>
      </div>
    );
}

export default Menu;