import Button from './Button'
import styles from '../styles/MainLayout.module.css'
// import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = ({ title, onShowForm, showAdd }) => {
  const router = useRouter()

    return (
        <>
          <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            {/* <Link href='/login'> */}
              <Button 
                onClick={() => router.push('/login')}
                bgColor='red'
                text='Logout'>
              </Button>
            {/* </Link> */}
          </div>
          <header className={styles.header}>
            <h1>{title}</h1>
            <Button 
              onClick={onShowForm} 
              text={showAdd ? 'x' : 'Add'}>
            </Button>
          </header>
        </>
    )
}

export default Header
