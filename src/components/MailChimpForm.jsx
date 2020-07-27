//MailchimpForm.jsx

import addToMailchimp from "gatsby-plugin-mailchimp"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { Typography } from "@material-ui/core"
import React from "react"

export default class MailChimpForm extends React.Component {
  constructor() {
    super()
    this.state = { email: "",name: null,subscribed: false,text:"Get notified when I post (less than 10 emails a year)"}
  }
  _handleSubmit = async e => {
    e.preventDefault()
    // const result = await addToMailchimp(this.state.email)
    // this.setState({result: result})
    addToMailchimp(this.state.email, {name: this.state.name})
    .then(({msg, result}) => {
      console.log('msg', `${result}: ${msg}`);
      if (result !== 'success') {
        this.setState({text: 'Uh oh...an error occurred. Try again. If the error persists, you may already be subscribed.'});
      } else {
        this.setState({subscribed: true, text: 'Thanks for subscribing!'});
      }
    })
    .catch(err => {
      console.log('err', err);
    });
  }
handleChange = event => {
    this.setState({ email: event.target.value })
  }
render() {

    return  [
<div style={{alignItems: 'center'}}>{this.state.text}</div>,
      <form onSubmit={this._handleSubmit}>
        {/* <div style={{alignItems: 'center'}}>{this.state.text}</div> */}
        {/* <label> {this.state.text} </label>  */}
  <br/>
        <TextField
          id="outlined-email-input"
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          variant="outlined"
          onChange={this.handleChange}
        />
        <br />
        <Button
          variant="contained"
          color="#0B3C5D"
          label="Submit"
          type="submit"
        >
          <Typography variant="button">Submit</Typography>
        </Button>
      </form>
      
    ]
  }
}