import { Outlet, NavLink } from 'react-router-dom'
import styles from './AppLayout.module.css'

export default function AppLayout() {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <NavLink to="/" className={styles.brand}>
            Bean App
          </NavLink>
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}
