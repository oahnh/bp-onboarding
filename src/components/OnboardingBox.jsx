// import statements
import React from 'react';

// interface OnboardingBoxProps {
//   sessionNumber: string;
//   date: string;
//   topic: string;
// }

// component starts
const OnboardingBox = ({ sessionNumber, date, topic }) => {
  return (
    <div className="box-1">
      <p>Onboarding Session {sessionNumber}</p>
      <p>{date}</p>
      <p>{topic}</p>
    </div>
  );

}

export default OnboardingBox;