import React, { useEffect, useState } from 'react';

import Header from '../../components/header';
import styles from './Dashboard.module.css';
import { IWorkout } from '../../index.d';
import { workoutsList } from './seed';
import Workout from './Workout';

/**
 * The Dashboard function returns a React component that displays the current
 * information to the user. From this page, the user can access other pages
 * as well as their settings.
 *
 * @returns {JSX.Element} The Dashboard React component
 */
export default function Dashoard(): JSX.Element {
  const [firstName, setFirstName] = useState<string>('');
  const [workouts, setWorkouts] = useState<IWorkout[]>([]);

  /**
   * The useEffect function is called below in order to set the state with new
   * values. The code below "sends a request" to get the data.
   */
  useEffect(() => {
    setFirstName('Jerry');
    setWorkouts(workoutsList);
  }, []);

  return (
    <>
      <Header page="home" title={`${firstName}'s Activities`} />
      <div className={styles.workoutsList}>
        {workouts.map(workout => (
          <Workout workout={workout} />
        ))}
      </div>
    </>
  );
}
