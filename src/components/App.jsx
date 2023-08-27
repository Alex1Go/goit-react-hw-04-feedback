
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistic/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
import { useState } from "react";

export  const App =()=> {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (option) => {
      if (option === "good") {
      setGood((prevGood) => prevGood + 1);
    } else if (option === "neutral") {
      setNeutral((prevNeutral) => prevNeutral + 1);
    } else if (option === "bad") {
      setBad((prevBad) => prevBad + 1);
    }
    };

  const countTotalFeedback = () => {  
  return good + neutral + bad;
  };
  const total =  countTotalFeedback();
  
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good  * 100) / countTotalFeedback()) || 0;
  };
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
      <div  style={{ width: 400, marginLeft: 400 }}>
        <Section title="Please leave feedback" >
          <FeedbackOptions
            options={["good", "neutral", "bad"]}            
            onLeaveFeedback={onLeaveFeedback} />
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
