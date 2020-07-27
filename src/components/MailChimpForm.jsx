//MailchimpForm.jsx

import addToMailchimp from "gatsby-plugin-mailchimp"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { Typography } from "@material-ui/core"
import React from "react"

export default class MailChimpForm extends React.Component {
  constructor() {
    super()
    this.state = { email: "", result: "" }
  }
  _handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailchimp(this.state.email)
    this.setState({result: result})
  }
handleChange = event => {
    this.setState({ email: event.target.value })
  }
render() {
    return this.state.result === "success" ? (
      <div>You've been subscribed!</div>
    ) : this.state.result === "error" ? (
      <div>Oops...there's been an error. You may already be subscribed, or you can re-try.</div>
    ) :( 
      <form onSubmit={this._handleSubmit}>
            <label> Get notified when I post (less than 10 emails a year) </label>
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
    )
  }
}