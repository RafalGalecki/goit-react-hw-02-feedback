import { Component } from 'react';

class Statistics extends Component {
  

  render() {
    const { title, options, total, positivePercentage } = this.props;
    return (
      <>
        <h1>{title}</h1>
        <ul>
          <li>
            <p>Good: </p>
            <span>0</span>
          </li>
          <li>
            <p>Neutral: </p>
            <span>0</span>
          </li>
          <li>
            <p>Bad: </p>
            <span>0</span>
          </li>
          <li>
            <p>Total: </p>
            <span>0</span>
          </li>
          <li>
            <p>Positive feedback: </p>
            <span>0 %</span>
          </li>
        </ul>
      </>
    );
  }
}

export default Statistics