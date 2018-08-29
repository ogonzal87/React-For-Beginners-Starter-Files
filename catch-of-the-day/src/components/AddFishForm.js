import React from 'react'
import { formatPrice } from '../helpers';

class AddFishForm extends React.Component {
  nameRef = React.createRef()
  priceRef = React.createRef()
  statusRef = React.createRef()
  descRef = React.createRef()
  imageRef = React.createRef()

  createFish = (e) => {
    const { nameRef, priceRef, statusRef, descRef, imageRef } = this
    const { addFish } = this.props
    const fish = {
      nameRef: nameRef.value.value,
      priceRef: parseFloat(priceRef.value.value),
      statusRef: statusRef.value.value,
      descRef: descRef.value.value,
      imageRef: imageRef.value.value,
    }
    // 1. Prevent the form from submitting 
    e.preventDefault()
    addFish(fish)
    e.currentTarget.reset()
  }

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
        <select name="status" ref={this.statusRef} >
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="Description" />
        <input name="image" ref={this.imageRef} type="text" placeholder="Image" />
        <button>+ Add Fish</button>
      </form>
    )
  }
}

export default AddFishForm