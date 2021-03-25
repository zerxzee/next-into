import styles from '../styles/MainLayout.module.css'

const Button = ({ text, onClick, bgColor }) => {
    return (
        <button 
            style={{backgroundColor: bgColor}}
            onClick={onClick}
            className={styles.btn}>
            {text}
        </button>
    )
}

export default Button
