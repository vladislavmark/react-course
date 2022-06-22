import c from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={c.nav}>
            <div><a href="#" className={c.item}>Profile</a></div>
            <div><a href="#" className={`${c.item} ${c.active}`}>Messages</a></div>
            <div><a href="#" className={c.item}>News</a></div>
            <div><a href="#" className={c.item}>Music</a></div>
            <div><a href="#" className={c.item}>Settings</a></div>
        </nav>
    );
}

export default Navigation;