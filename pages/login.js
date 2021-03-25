import styles from '../styles/MainLayout.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'

const login = () => {
  const router = useRouter()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

    const onSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert('Please enter your login credentials');
      return;
    }

    if (username === 'zerxzee' && password === 'admin') {
      setUsername('');
      setPassword('');
      router.push('/')
    } else {
      alert('Incorrect credentials. Please try again.');
    }

  };

    return (
        <form className={styles.addForm} onSubmit={onSubmit}>
          <h3>Login</h3>
          <div className={styles.formControl}>
            <label>Username</label>
            <input
              type='text'
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={styles.formControl}>
            <label>Password</label>
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input type='submit' value='Login' className={[styles.btn, styles.btnBlock].join(' ')}/>
        </form>
    )
}

export default login
