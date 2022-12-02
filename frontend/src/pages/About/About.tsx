import React from 'react';
import me from '../../assets/me.jpg'
import styles from './About.module.css'

const About = () => {
    return (
        <div>
            <h1 className={styles.title}>About me</h1>

            <main className={styles.main}>
                <div>
                    <h2>Main stats</h2>
                    <ul>
                        <li>20 y.o.</li>
                        <li>Ubud, Indonesia</li>
                        <li>Languages
                            <ul>
                                <li>Russian — native</li>
                                <li>English — striving for IELTS 7.5</li>
                                <li>Japanese — striving for JLPT N5</li>
                            </ul>
                        </li>

                    </ul>
                </div>
                <img src={me} alt="ugly_boy_photo.jpg" className={styles.image}/>
            </main>

        </div>
    );
};

export default About;
