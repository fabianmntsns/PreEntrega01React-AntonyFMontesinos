import styles from './NavBar.module.css';
import CartWidget from '../CartWidget/CartWidget';
import logoamazon from './assets/logoamazon.svg'



const NavBar = () => {
    return(
        <header className={styles.contenedor}>
                <nav>
                    <h3><img src={logoamazon} /></h3>
                        <div className={styles.botonesBox}>
                            <button className={styles.botones}>Celulares</button>
                            <button className={styles.botones}>Tablets</button>
                            <button className={styles.botones}>Notebooks</button>
                            <button className={styles.botones}>Ofertas</button>
                        </div>
                        <CartWidget/>
                </nav>
        </header>
    )
}

export default NavBar 
