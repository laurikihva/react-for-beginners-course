import React from 'react';

class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-selector">
        <h2>Please pick your Store:</h2>
        <input type="text" placeholder="Store name" required></input>
        <button type="submit">Pick your store -></button>
      </form>
    );
  }
}

export default StorePicker;