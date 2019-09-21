import React from 'react';
import Calendar from 'react-calendar';

import Header from '../../components/header';
import styles from './Schedule.module.css';

export default function Schedule() {
  return (
    <>
      <Header page="schedule" title="Schedule" />
      <Calendar className={styles.calendar} />
    </>
  );
}
