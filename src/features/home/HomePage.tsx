import { useAuth } from '@/hooks/useAuth'
import styles from './HomePage.module.css'

export default function HomePage() {
  const { isAuthenticated, loading } = useAuth()

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>Welcome to Bean App</h1>
      <p className={styles.status}>
        {loading
          ? 'Checking session...'
          : isAuthenticated
            ? 'You are signed in.'
            : 'You are not signed in.'}
      </p>
    </div>
  )
}
