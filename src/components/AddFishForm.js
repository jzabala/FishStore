import React from 'react';

class AddFishForm extends React.Component {  
  createFish = (event) => {
    event.preventDefault();
    const fish = {
      name:this.name.value,
      price:this.price.value,
      status:this.status.value,
      desc:this.desc.value,
      image:this.image.value
    }
    this.props.addFish(fish);

    //Resetting the form
    event.target.reset();
  }

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input ref={(input) => this.name = input} type="text" placeholder="Fish Name" />
        <input ref={(input) => this.price = input} type="number" placeholder="Fish Price" />
        <select ref={(input) => this.status = input}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea ref={(input) => this.desc = input} placeholder="Fish Desc"></textarea>
        <input ref={(input) => this.image = input} type="text" placeholder="Fish Image" />
        <button type="submit">+ Add Item</button>
      </form>
    );
  }

  static propTypes = {
    addFish: React.PropTypes.func.isRequired
  }
}

export default AddFishForm;
