import { Component } from 'react';

class Statistics extends Component {
  

  render() {
    const { options, total, positiveFeedbackPercentage } = this.props;
    return (
      <>
        {options.map(option => (
          <p key={option}>{option}: {this.props[option]}</p>
        ))}
        <p>total: {total}</p>
        <p>positive feedback: {positiveFeedbackPercentage}</p>
      </>
    );
  }
}

export default Statistics