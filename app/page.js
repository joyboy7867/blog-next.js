import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'




export default function Home() {
  return (
    <>
     
    
    <main className={styles.main}>
    
    
      <div className={styles.description}>
        
        <p>
          
          Blog by Hunter Coder&nbsp;
          
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' CODER'}
            
          </a>
        </div>
      </div>

      <div className={styles.center}>
       <h1 className={styles.center}>Hunter Coder</h1>
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Next js <span>-&gt;</span>
          </h2>
          <p>React framework for fast & efficient coding.</p>
        </a>

        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            JavaScript <span>-&gt;</span>
          </h2>
          <p>One of the popular Programming language of 2023</p>
        </a>

        <a
          href="https://react.dev/learn"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            React js <span>-&gt;</span>
          </h2>
          <p>Most powerfull Library of Javascript</p>
        </a>

        <a
          href="https://socket.io/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Socket.io <span>-&gt;</span>
          </h2>
          <p>
            To Create Bi-direction Web-Socket.
          </p>
        </a>
      </div>
    </main>
    </>
  )
}
