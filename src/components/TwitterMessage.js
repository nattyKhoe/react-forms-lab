import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      TwitterMessage: "",
      Chars: "",
    };
  }

  handleChange = (e) =>{
    this.setState({
      TwitterMessage: e.target.value,
      Chars: e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" maxLength={this.props.maxChars} value={this.state.TwitterMessage} onChange={event => this.handleChange(event)}/>
        <p>Remaining Characters: {this.props.maxChars-this.state.Chars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
