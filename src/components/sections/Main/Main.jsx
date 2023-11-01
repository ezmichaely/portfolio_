import Image from 'next/image';
import Link from 'next/link';
import styles from './main.module.css'
import { socials } from '@/constants';

export default function Home() {
  return (
    <section id="main">
      <div className={styles.main}>
        <div className={styles.title}>
          <h1 className={styles.subtitle1}>
            <span className="whitespace-nowrap">Hi there 👋,</span>
            <span className="whitespace-nowrap">&nbsp; I am</span>
          </h1>
          <h1 className={styles.subtitle2}>
            EZ MICHAEL YUCOR
          </h1>
        </div>

        <div className={styles.second}>
          <div className={styles.second_left}>
            <div className={styles.web_dev}>
              <h1 className={styles.web}>WEB</h1>
              <h1 className={styles.developer}>DEVELOPER</h1>
            </div>

            <div className={styles.socials}>
              {socials.map((data) => (
                <Link key={data.title} href={data.url} target='_blank'>
                  <Image src={data.icon}
                    alt={data.title}
                    height={40}
                    priority />
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.profile_container}>
            <div className={`${styles.morphing_shape}`} />
          </div>
        </div>
      </div>
    </section>
  )
}