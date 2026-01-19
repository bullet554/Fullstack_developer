import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Feature from "../components/Feature/Feature";
import Offer from "../components/Offer/Offer";
import ProductCard from "../components/ProductCard/ProductCard";
import Subscribe from "../components/Subscribe/Subscribe";
import heroMen from '../assets/img/misc/hero-men.png';
import '../styles/pagesStyles/Home.css';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            <section className="hero center">

                <div className="hero__left">
                    <img src={heroMen} alt="hero" className="hero__left_img" />
                </div>

                <div className="hero__right">
                    <h1 className="hero__title">
                        <span className="hero__big-text">THE BRAND</span><br />
                        OF&nbsp;LUXERIOUS <span className="hero__pink-text">
                            FASHION
                        </span>
                    </h1>
                </div>
            </section>
            <Offer />
            <section className="product center">

                <h2 className="product__title">Fetured Items</h2>
                <p className="product__subtitle">
                    Shop for items based on what we featured in this week
                </p>

                <div className="product__items">

                    {products.map((product, index) => {
                        if (product.is_featured) {
                            return (
                                <ProductCard key={index} product={product} />
                            );
                        }
                        return null;
                    })}
                </div>

                <Link className="btn-catalog-open" to="/catalog">
                    <button className="product__add-btn">Browse All Product</button>
                </Link>
            </section>
            <Feature />
            <Subscribe />
        </div>
    );
}

export default Home;