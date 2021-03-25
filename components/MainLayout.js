import styles from '../styles/MainLayout.module.css'

const MainLayout = ({children}) => {
    return (
        <div className={styles.container}>
            <main>{children}</main>
        </div>
    )
}

export default MainLayout
