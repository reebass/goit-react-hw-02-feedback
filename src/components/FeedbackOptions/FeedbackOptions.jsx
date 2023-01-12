import React from 'react';
import { Button } from './FeedbackOptions.styled';

export const FeeadbackOptions = ({options, onLeaveFeedback}) => (
    <>
    {options.map((feedback, index)=> (
        <Button
          className='btn'
          type="button"
          key={index}
          id={feedback}
          onClick={onLeaveFeedback}
        >
          {feedback}
        </Button>
    ))}
  </>
) 