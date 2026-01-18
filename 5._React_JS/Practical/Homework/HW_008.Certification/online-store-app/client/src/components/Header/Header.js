import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import headerLogo from "../../assets/img/logos/header_logo.svg";
import headerSearch from "../../assets/img/ui/header_search.svg";
import headerRight1 from "../../assets/img/ui/header_right_1.svg";
import headerRight2 from "../../assets/img/ui/header_right_2.svg";
import headerRight3 from "../../assets/img/ui/header_right_3.svg";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const handleOutsideClick = (e) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(e.target) &&
            buttonRef.current &&
            !buttonRef.current.contains(e.target)
        ) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return (
        <header className={`header center ${isMenuOpen ? 'menu-open' : ''}`}>
            <section className="header__left">
                <Link to="/" className="header__logo">
                    <img src={headerLogo} alt="logo" />
                </Link>
                <Link to="#" className="header__search">
                    <img src={headerSearch} alt="search" />
                </Link>
            </section>

            <section className="header__right">
                <img
                    src={headerRight1}
                    alt="Open/close menu"
                    className="nav__img"
                    onClick={toggleMenu}
                    ref={buttonRef}
                    style={{ cursor: "pointer" }}
                />

                <div className={`menu ${isMenuOpen ? 'active' : ''}`} ref={menuRef}>
                    <h2 className="menu__heading">MENU</h2>

                    <h3 className="menu__subheading">MAN</h3>
                    <ul className="menu__ul">
                        <li>
                            <Link className="menu__link" to="#">Accessories</Link>
                        </li>
                        <li>
                            <Link className="menu__link" to="#">Bags</Link>
                        </li>
                        <li>
                            <Link className="menu__link" to="#">Denim</Link>
                        </li>
                        <li>
                            <Link className="menu__link" to="#">T-Shirts</Link>
                        </li>
                    </ul>

                    <h3 className="menu__subheading">WOMAN</h3>
                    <ul className="menu__ul">
                        <li>
                            <Link className="menu__link" to="#">Accessories</Link>
                        </li>
                        <li>
                            <Link className="menu__link" to="#">Jackets & Coats</Link>
                        </li>
                        <li>
                            <Link className="menu__link" to="#">Polos</Link>
                        </li>
                        <li>
                            <Link className="menu__link" to="#">T-Shirts</Link>
                        </li>
                        <li>
                            <Link className="menu__link" to="#">Shirts</Link>
                        </li>
                    </ul>

                    <h3 className="menu__subheading">KIDS</h3>
                    <ul className="menu__ul">
                        <li>
                            <Link className="menu__link" to="#">Accessories</Link>
                        </li>
                        <li>
                            <Link className="menu__link" to="#">Jackets & Coats</Link>
                        </li>
                        <li>
                            <Link className="menu__link" to="#">Polos</Link>
                        </li>
                        <li>
                            <Link className="menu__link" to="#">T-Shirts</Link>
                        </li>
                        <li>
                            <Link className="menu__link" to="#">Shirts</Link>
                        </li>
                        <li>
                            <Link className="menu__link" to="#">Bags</Link>
                        </li>
                    </ul>
                </div>

                <Link to="/registration" className="header__nav header__nav_mobile">
                    <img src={headerRight2} alt="regist" className="header__img" />
                </Link>

                <Link to="/cart" className="header__nav header__nav_mobile">
                    <img src={headerRight3} alt="cart" className="header__img" />
                </Link>
            </section>
        </header>
    );
};

export default Header;