import styles from './Hero.module.scss';
import profile3 from '../assets/profile3';



function Hero(){
    return (
        <section className={styles.hero}>
            <div classname={styles.profilePhotoContainer}>
                <img src={profile3} 
                alt="Maua Imani" 
                className={styles.profilePhoto}/>
            </div>

            <h1 className={styles.name}>Maua Imani</h1>
            <p className={styles.tagline}>Sofware Engineer | CS Student</p>
            <div className={styles.socials}>

            </div>
            <a 
            href="https://www.linkedin.com/in/elaine-i-maua-666207226/"
            target='_blank'
            rel='noopener noreferrer'
            className={styles.socialButton}
            
            > 💼 LinkedIn
            </a>


            <a 
            href="https://github.com/Imani-Maua"
            target='_blank'
            rel='noopener noreferrer'
            className={styles.socialButton}
            
            >  💻 GitHub
            </a>

            <a 
            href="path/to/resume.pdf"
            target='_blank'
            className={styles.socialButton}
            
            > 📄 Resume
            </a>

            <a 
            href="mailtto:elainemaua644@gmail.com"
            target='_blank'
            rel='noopener noreferrer'
            className={styles.socialButton}
            
            >  ✉️ Email Me
            </a>

            <div className={styles.intro}>
                <p>Hi! 👋🏾 </p>
                <p>I love building softwares that makes life easier so we focus on the fun stuff 🐾 </p>
                <p>Solving problem's fun 🐾. Tech is fun! 🐾  and I love fun!🐾 </p>
                <p>Right now, Im training SlotMeIn, leveraging ML algorithms and constraint optimization to intelligently schedule employee shifts</p>
                <p>I'm using predictive models and pattern recognition to turn scheduling nightmares into data-driven allocation. You see? Fun!</p>
                <p>I'm passionate about becoming an engineer who builds scalable, distributed systems that solve real problems and ship value!</p>
                <p>Code. Solve. Build. Repeat</p>
                <p>Tech is for girlies too! I hope to use my work to inspire younger girlies to get into SWE, AI, systems design - all of it like they absolutely should!💅🏾✨ </p>
            </div>

        </section>
    )
}