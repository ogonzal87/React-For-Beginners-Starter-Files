import React, { Fragment } from 'react'
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
  myInput = React.createRef()

  goToStore = (event) => {
    const { history } = this.props
    // 1. Stop the form from Submitting automatically
    event.preventDefault()
    // 2. Get text from the Input
    const pathName = this.myInput.value.value
    // 3. Change the page to /store/whatever-they-entered
    history.push(`/store/${pathName}`)
  }

  render() {
    return (
      <Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter a Store</h2>
          <input
            ref={this.myInput}
            type="text"
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store</button>
        </form>
      </Fragment>
    )
  }
}

export default StorePicker