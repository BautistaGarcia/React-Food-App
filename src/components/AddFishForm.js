import React from 'react';
import '../styles/AddFishForm.css';

class AddFishForm extends React.Component {

  nameRef = React.createRef();
  imageRef = React.createRef();
  statusRef = React.createRef();
  descriptionRef = React.createRef();
  priceRef = React.createRef();

  // Use an arrow function to ensure that `this` is bound to the component instance
  createFish = e => {
    e.preventDefault();

    const fish = {
      name: this.nameRef.current.value,
      image: this.imageRef.current.value,
      status: this.statusRef.current.value,
      description: this.descriptionRef.current.value,
      price: parseFloat(this.priceRef.current.value)
    }
    this.props.addFish(fish);

    //  reset the form
    e.currentTarget.reset();
  }

  render() {
    return (
      <div className='AddFishForm'>
        <h3>Add A Fish</h3>
        <form className="AddFishForm" onSubmit={this.createFish}>
          <input type="text" name="name" placeholder='name' id="name" ref={this.nameRef} />
          <input type="text" name="image" placeholder='image' id="image" ref={this.imageRef} />
          <select name="status" placeholder='status' id="status" ref={this.statusRef}>
            <option value="status" disabled >status</option>
            <option value="available">available</option>
            <option value="unavailable">Sold Out !</option>
          </select>
          <textarea name="description" placeholder='description' id="description" ref={this.descriptionRef} />
          <input type="text" name="price" placeholder='price' id="price" ref={this.priceRef} />
          <button type="submit">+ Add A Fish </button>
        </form>
      </div>
    );
  }
}

export default AddFishForm;