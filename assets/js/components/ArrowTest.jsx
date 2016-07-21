import React, {Component} from 'react';

//export const ArrowTest = ({arrow}) => <div>{arrow}</div>;

export default class ArrowTest extends Component {
  render() {
    return (
      <div>{this.props.arrow}</div>
    )
  }
}
