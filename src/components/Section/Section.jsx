// import { FeeadbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import React from 'react';

export const Section = ({title, children}) => (
  <section>
    <h1 className='title'>{title}</h1>
    {children}
  </section>
) 
// // import PropTypes from 'prop-types';

// export class Section extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleIncrementFeedback = e => {
//     this.setState(prevState => ({
//       [e.target.id]: prevState[e.target.id] + 1,
//     }));
//   };

//   totalFeedBack = () => {
//     let total = 0;
//     for (const value of Object.values(this.state)) {
//         total += value
//     }
//     return total
//   }

//   countPositiveFeedbackPercentage = () => {
//    return (this.state.good / this.totalFeedBack() * 100).toFixed(2)
//   }

//   render() {
//     const { good, neutral, bad } = this.state;

//     return (
//       <>
//       <FeeadbackOptions options={Object.keys(this.state)} onIncrementFeedback={this.handleIncrementFeedback}/>
//         {/* <div>
//           <h1 className="Feedback_Title">Please leave feedback</h1>
//           {Object.keys(this.state).map(button => (
//             <>
//               <button
//                 type="button"
//                 key={button}
//                 id={button}
//                 onClick={this.handleIncrementFeedback}
//               >
//                 {button}
//               </button>
//             </>
//           ))}
//         </div> */}
//         <div>
//           <h1 className="Statistics_Title">Statistics</h1>
//           <ul className="Statistics">
//             <li>
//               <span>Good</span>:<span>{good}</span>
//             </li>
//             <li>
//               <span>Neutral</span>:<span>{neutral}</span>
//             </li>
//             <li>
//               <span>Bad</span>:<span>{bad}</span>
//             </li>
//             <li>
//               <span>Total</span>:<span>{this.totalFeedBack()}</span>
//             </li>
//             <li>
//               <span>Positive feedback</span>:<span>{this.countPositiveFeedbackPercentage()}%</span>
//             </li>
//           </ul>
//         </div>
//       </>
//     );
//   }
// }
