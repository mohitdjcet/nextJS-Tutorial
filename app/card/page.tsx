import styles from './Card.module.css';

export default function CardPage() {
    return(
        <div className={styles.card}>
            <h1 className={styles.title}>Card Page</h1>
            <p>This is the card page.</p>
        </div>
    )
}