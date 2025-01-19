import { useEffect, useRef, useState } from "react";
import axios from "axios";

export const ProductList2 = () => {
    const carouselRef = useRef(null);
    const [productItems, setProductItems] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(
                    "https://bewakoof-web.onrender.com/product/get-all-product2"
                );
                const allImages = response.data.products.reduce(
                    (acc, product) => [...acc, ...product.images],
                    []
                );
                setProductItems(allImages);
            } catch (error) {
                console.error("Error fetching products:", error);
                setProductItems([]);
                alert("Failed to load products. Please try again later.");
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (carouselRef.current) {
                const { scrollLeft, scrollWidth, offsetWidth } = carouselRef.current;
                if (scrollLeft + offsetWidth >= scrollWidth) {
                    carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
                } else {
                    carouselRef.current.scrollBy({
                        left: offsetWidth,
                        behavior: "smooth",
                    });
                }
            }
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (<>
            <h1 className="font-bold text-2xl w-full ml-2">New Branded Items</h1>
        <div className="overflow-x-auto whitespace-nowrap py-2 bg-gray-100 mt-2" ref={carouselRef}>
            <div className="flex space-x-12 px-4 text-xl font-semibold">
                {productItems.map((item, index) => (
                    <img
                        key={index}
                        src={item}
                        alt={`Product image ${index + 1}`}
                        className="w-full h-64 object-cover sm:h-48 md:h-56 lg:h-[60%] cursor-pointer"
                    />
                ))}
            </div>
            <style jsx>{`
                ::-webkit-scrollbar {
                    display: none;
                }
                -ms-overflow-style: none;
                scrollbar-width: none;
            `}</style>
        </div>
        </>
    );
};
