import { Outlet, NavLink, Link, useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { signOut } from '@/services/auth.service'
import styles from './AppLayout.module.css'

export default function AppLayout() {
  const { isAuthenticated, session } = useAuth()
  const navigate = useNavigate()

  async function handleSignOut() {
    await signOut()
    navigate('/', { replace: true })
  }

  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <NavLink to="/" className={styles.brand}>
            Bean App
          </NavLink>
        </nav>
        <div className={styles.authNav}>
          {isAuthenticated ? (
            <>
              <span className={styles.email}>{session?.user.email}</span>
              <button onClick={handleSignOut} className={styles.signOutButton}>
                Sign out
              </button>
            </>
          ) : (
            <Link to="/login" className={styles.signInLink}>Sign in</Link>
          )}
        </div>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}
