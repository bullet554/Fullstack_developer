import { useEffect, useState } from "react";
import Breadcrumbs from "../components/Navigation/Breadcrumbs/Breadcrumbs";
import SortFilter from "../components/Navigation/SortFilter/SortFilter";
import ProductCard from "../components/ProductCard/ProductCard";
import Feature from "../components/Feature/Feature";
import Subscribe from "../components/Subscribe/Subscribe";
import arrowLeft from '../assets/img/ui/paginArrowLeft.svg';
import arrowRight from '../assets/img/ui/paginArrowRight.svg';
import '../styles/pagesStyles/Catalog.css';

const Catalog = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        scrollToTop();
        fetch('/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const totalPages = Math.ceil(products.length / productsPerPage);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        scrollToTop();
    };

    const handlePrevClick = () => {
        setCurrentPage(currentPage - 1);
        scrollToTop();
    };

    const handleNextClick = () => {
        setCurrentPage(currentPage + 1);
        scrollToTop();
    };

    return (
        <>
            <Breadcrumbs />
            <SortFilter />
            <section class="product center">

                <div class="product__items">

                    {currentProducts.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>

                <div className="pagination">
                    <div className="pagination__content">
                        {currentPage > 1 && (
                            <img
                                src={arrowLeft}
                                onClick={handlePrevClick}
                                className="pagination__btn-arrow"
                            />
                        )}

                        {/* Номера страниц */}
                        {Array.from({ length: totalPages }, (_, index) => index + 1).map(number => (
                            <button
                                key={number}
                                onClick={() => handlePageChange(number)}
                                className={`
                                pagination__btn 
                                ${currentPage === number ? 'pagination__btn_active' : ''}
                                `}
                            >
                                {number}
                            </button>
                        ))}

                        {currentPage < totalPages && (
                            <img
                                src={arrowRight}
                                onClick={handleNextClick}
                                className="pagination__btn-arrow"
                            />
                        )}
                    </div>
                </div>
            </section>
            <Feature />
            <Subscribe />
        </>
    );
}

export default Catalog;