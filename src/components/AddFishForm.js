import React from 'react';

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = (event) => {
    event.preventDefault();
    const fish = {
      name: this.nameRef.value.value, 
      price: parseFloat(this.priceRef.value.value), 
      status: this.statusRef.value.value, 
      desc: this.descRef.value.value, 
      image: this.imageRef.value.value, 
    }
    this.props.addFish(fish);
    // refresh the form
    event.currentTarget.reset();
  }

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input mame="name" ref={this.nameRef} placeholder="Name" type="text" />
        <input mame="price" ref={this.priceRef} placeholder="Price" type="text" />
        <select mame="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold out!</option>
        </select>
        <textarea mame="desc" ref={this.descRef} placeholder="Desc" />
        <input mame="image" ref={this.imageRef} placeholder="Image" type="text" />
        <button className="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;