import h from './Header.module.css';

const Header = () => {
    return (
        <header className={h.header}>
            <img
                src="https://cdn.dribbble.com/users/60166/screenshots/15558186/media/fa6bd0b894439dd443fa89956d74719b.jpg?compress=1&resize=1200x900&vertical=top"
                alt="Logo image"/>
        </header>
    );
}

export default Header;