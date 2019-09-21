import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

/**
 * The IProps interface contains the types for the Header component props.
 */
interface IProps {
  page: string;
  title: string;
}

/**
 * The Header function returns a React component. The component is a reusable
 * title and navigation UI that appears at the top of each page.
 *
 * @param props The data passed down by the parent component
 * @returns {JSX.Element} The Header React component
 */
export default function Header(props: IProps): JSX.Element {
  return (
    <div className={styles.headerRow}>
      <h1 className={styles.headerTitle}>{props.title}</h1>
      <div className={styles.navigationRow}>
        <Link
          className={
            props.page === 'home'
              ? styles.navigationButtonSelected
              : styles.navigationButtonUnselected
          }
          to="/"
        >
          Home
        </Link>
        <Link
          className={
            props.page === 'schedule'
              ? styles.navigationButtonSelected
              : styles.navigationButtonUnselected
          }
          to="/schedule"
        >
          Schedule
        </Link>
        <Link
          className={
            props.page === 'social'
              ? styles.navigationButtonSelected
              : styles.navigationButtonUnselected
          }
          to="/social"
        >
          Social
        </Link>
      </div>
    </div>
  );
}
