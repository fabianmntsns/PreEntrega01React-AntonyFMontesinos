import styles from './ItemListContainer.module.css'


const ItemListContainer = ({greeting}) => {
    return (
        <div className={styles.boxGreeting}>
            <h1>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer