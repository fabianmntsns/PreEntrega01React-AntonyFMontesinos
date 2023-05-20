import styles from './NavBar.module.css'


const NavBar = () => {
    return(
        <header className={styles.contenedor}>
                <nav>
                    <h3 className={styles.titulo}>E-Commerce</h3>
                        <div className={styles.botones}>
                            <button>Celulares</button>
                            <button>Tablets</button>
                            <button>Notebooks</button>
                            <button>Ofertas</button>
                        </div>
                </nav>
        </header>
    )
}

export default NavBar 
