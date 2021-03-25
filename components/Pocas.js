import styles from '../styles/MainLayout.module.css'
import Poca from './Poca'

const Pocas = ({pocas, onDelete }) => {
    return (
        <div className={styles.pocas}>
            { pocas.map((poca) => (
                <Poca key={poca.id} poca={poca} onDelete={onDelete}></Poca>
            ))}
        </div>
    )
}

export default Pocas
