import styles from './MyProfile.module.css';

function MyProfile () {
    return (
        <div className={styles.container}>
            <h2>Hello John</h2>
            <div>
                <p className={styles['section-title']}>Account</p>
                <p className={styles.text}>Profile</p>
                <p className={styles.text}>Wishlist</p>
            </div>
            <div>
                <p className={styles['section-title']}>Other</p>
                <p className={styles.text}>Help</p>
                <p className={styles.text}>About</p>
            </div>
        </div>
    )
}

export default MyProfile;