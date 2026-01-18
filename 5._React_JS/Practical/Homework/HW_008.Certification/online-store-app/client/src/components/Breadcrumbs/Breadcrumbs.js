import styles from './Breadcrumbs.module.scss';

const Breadcrumbs = ({ items }) => {
    return (
        <nav className={styles.breadcrumbs}>
            {items.map((item, index) => (
                <span key={index} className={styles.breadcrumb}>
                    {item.name}
                    {index < items.length - 1 && ' / '}
                </span>
            ))}
        </nav>
    );
};

export default Breadcrumbs;