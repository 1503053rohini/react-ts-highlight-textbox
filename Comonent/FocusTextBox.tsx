import React,{Component} from 'react';

export default class FocusTextBox extends Component{
  constructor(props)
  {
    super(props);
    this.state = {
      TextValue : ''
    };
    this.getValue = this.getValue.bind(this);
  };

  focusTextBox(event)
  {
    event.target.style.backgroundColor = "grey";
  }
  getValue(event)
  {
    this.setState({
      TextValue: event.target.value
    });
  }
  render()
  {
    return(
      <div>
      <input type="text" onFocus = {this.focusTextBox} onChange={this.getValue}/>
      <div>{this.state.TextValue}</div>
      </div>
    );
  }
}