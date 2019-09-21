import React, { useEffect, useState } from 'react';

import Header from '../../components/header';
import styles from './Dashboard.module.css';
import { workoutsList } from './seed';

/**
 * The IWorkout interface holds the types for a workout object.
 */
interface IWorkout {
  id: number;
  day: string;
  activity: string;
}

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

  useEffect(() => {
    setFirstName('Jerry');
    setWorkouts(workoutsList);
  }, []);

  return (
    <>
      <Header page="home" title={`${firstName}'s Activities`} />
      <div className={styles.workoutsList}>
        {workouts.map(workout => (
          <div className={styles.workoutCard} key={workout.id}>
            <p>{workout.day}</p>
            <p>{workout.activity}</p>
          </div>
        ))}
      </div>
    </>
  );
}
