import React, { useEffect, useState } from 'react';

import Header from '../../components/header';

/**
 * The Dashboard function returns a React component that displays the current
 * information to the user. From this page, the user can access other pages
 * as well as their settings.
 *
 * @returns {JSX.Element} The Dashboard React component
 */
export default function Dashoard(): JSX.Element {
  const [firstName, setFirstName] = useState<string>('');

  useEffect(() => {
    setFirstName('Jerry');
  }, []);

  return (
    <>
      <Header page="home" title={`${firstName}'s Activities`} />
    </>
  );
}
