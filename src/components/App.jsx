import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistic/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";




export  class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

    onLeaveFeedback = (option) => {
      this.setState((prevState) => {
        return {
          [option]: prevState[option] + 1,
        };
      });
    };
 
  countTotalFeedback = () => {  
  return Object.values(this.state).reduce((acc, option) => acc + option, 0)  
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good  * 100) / this.countTotalFeedback()) || 0;
  };


  render() {
    const { good, neutral, bad } = this.state;
    const total =  this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div  style={{ width: 400, marginLeft: 400 }}>
        <Section title="Please leave feedback" >
          <FeedbackOptions
            options={Object.keys(this.state)}            
            onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title="Statistics" >
        {total  ?  
          (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
              positivePercentage={positivePercentage} />) :
          (<Notification message="There is no feedback" />) 
          }  

          </Section>
      </div>
    );
  };
};
