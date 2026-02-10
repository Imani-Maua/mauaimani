import styles from './ProjectCard.module.scss';


function ProjectCard(title, stack, start, end, desc, link) {
    return (
        <div className={styles.projectCard}>
            <div className={styles.projectTitle}>
                <h2>{title}</h2>
                <div>
                    <span><strong>Technologies:</strong></span>
                    <p>{stack}</p>
                </div>
            </div>
            <div className={styles.projectTime}>
                <span><strong>Date:</strong></span>
                <p>{start}</p>
                <p>{end}</p>
            </div>
            <div className={styles.projectDesc}>
                <p>{desc}</p>
            </div>
            <div className={projectButtons}>
                <a
                    href={link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={styles.socialButton}

                >Github
                </a>
                <a
                    href={link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={styles.socialButton}

                >Demo
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;