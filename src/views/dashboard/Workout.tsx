import React from 'react';

import styles from './Workout.module.css';
import { IWorkout } from '../../index.d';

/**
 * The IProps interface contains the types for the Workout component props.
 */
interface IProps {
  workout: IWorkout;
}

/**
 * The Workout function returns a React component. The Workout component is a
 * stateless function that renders an individual workout card on the home page.
 *
 * @param props The data passed down by the parent component
 * @returns {JSX.Element} The Workout React component
 */
export default function Workout(props: IProps): JSX.Element {
  return (
    <div className={styles.workoutCard}>
      <p>{props.workout.day}</p>
      <p>{props.workout.activity}</p>
    </div>
  );
}
