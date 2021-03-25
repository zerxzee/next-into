import styles from '../styles/MainLayout.module.css'
import { useState } from 'react';

const AddPoca = ({onAdd}) => {
    const [text, setText] = useState('')
    const [price, setPrice] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text || !price) {
            alert('Please add a poca name')
            return
        }

        onAdd({ text, price })

        setText('')
        setPrice('')
    }


    return (
        <form className={styles.addForm} onSubmit={onSubmit}>
            <div className={styles.formControl}>
                <label>Poca Name</label>
                <input 
                    type='text' 
                    placeholder='Poca Name' 
                    value={text} 
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className={styles.formControl}>
                <label>Poca Price</label>
                <input 
                    type='number' 
                    placeholder='Poca Price' 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>

            <input type='submit' value='Add Poca' className={[styles.btn, styles.btnBlock].join(' ')}/>
        </form>
    )
}

export default AddPoca
