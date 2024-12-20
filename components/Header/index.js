import styles from './Header.module.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles);

const Header = (props) => {
    const menu = props.menu;
    return (
        <header>
            <div className={cx("menu")} >
                <div className="frameBox">
                    <div className={cx("list")} >
                        <ul>
                            {menu.map((item, index) => (
                                <li key={index}>
                                    <a href=''>
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
