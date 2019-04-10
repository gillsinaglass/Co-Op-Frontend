import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

class NewCollabForm extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Field control={Input} label='Project Name' placeholder='Project Name' />
          <Form.Field control={Input} label='GitHub' placeholder='GitHub' />
        </Form.Group>
        <Form.Group inline>
          <label>Skills Needed?</label>
          <Form.Field
            control={Radio}
            label='Developer'
            value='1'
            checked={value === '1'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label='Designer'
            value='2'
            checked={value === '2'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label='Project Manager'
            value='3'
            checked={value === '3'}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Field control={TextArea} label='Pitch' placeholder="What is your Pitch?" />
        <Form.Field control={TextArea} label='Description' placeholder='What have you gotten done?' />
        <Form.Field control={Checkbox} label='This Project is Active' />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    )
  }
}

export default NewCollabForm
