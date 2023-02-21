import { NextPage } from 'next';
import Link from 'next/link';

import styles from '@/styles/Home.module.css';

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>About Page</h1>
        <p className={styles.description}>
          <Link href="/">&larr; Go Back</Link>
        </p>
      </main>
    </div>
  );
};

export default About;
