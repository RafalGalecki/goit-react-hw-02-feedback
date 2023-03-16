import { Component } from 'react';



class FeedbackOptions extends Component {
  

  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <>
        {options.map(option => (
          <button
            type="button"
            key={option}
            onClick={() => this.onLeaveFeedback()}
          >{option}
        
          </button>
        ))}
      </>
    );
  }
}

export default FeedbackOptions;
