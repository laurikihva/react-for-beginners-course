import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (event) => {
    event.preventDefault();
    console.log(this);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please pick your Store:</h2>
        <input 
          type="text"
          ref={this.myInput} 
          placeholder="Store name" 
          defaultValue={getFunName()}
          required 
        />
        <button type="submit">Pick your store -></button>
      </form>
    );
  }
}

export default StorePicker;