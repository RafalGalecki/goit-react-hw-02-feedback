import { Component } from 'react';
import options from '../data/options.json';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statisctics/Statisctics';
import PropTypes from 'prop-types';

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} />
        </Section>

        <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} />
        </Section>

      </div>
    );
  }
};

App.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number
}