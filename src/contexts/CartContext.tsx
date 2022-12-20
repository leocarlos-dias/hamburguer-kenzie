import { createContext, useContext, useEffect, useState } from "react";
import { IValuesOfResearchField } from "../components/Header";
import { getProducts } from "../services/getProducts";
import { UserContext } from "./UserContext";

interface IProductContextProps {
    children: React.ReactNode
}

export interface IProducts {
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
}

export interface ICartProducts extends IProducts {
    amount: number;
}

interface IProductContext {
    products: IProducts[] | null;

    search: (formData: IValuesOfResearchField) => void;
    searchProducts: IProducts[] | null;

    cartProducts: ICartProducts[];
    setCartProducts: React.Dispatch<React.SetStateAction<ICartProducts[]>>;

    addToCart: ({ id, name, category, price, img, amount }: ICartProducts) => void;
    removeToCart: ({ id, name, category, price, img, amount }: ICartProducts) => void;

    removeProductInCart: ({ id }: { id: number }) => void;
    removeProductsInCart: () => void;
}

export const ProductContext = createContext({} as IProductContext);

export const ProductProvider = ({ children }: IProductContextProps) => {
    const { user } = useContext(UserContext);
    const [products, setProducts] = useState<IProducts[] | null>(null);
    const [searchProducts, setSearchProducts] = useState<IProducts[] | null>(null);
    const [cartProducts, setCartProducts] = useState<ICartProducts[]>([]);

    useEffect(() => {

        async function loadProduct() {
            const token = localStorage.getItem("@TOKEN");
            const shoppingCartJSON = localStorage.getItem(`@SHOPPING_CART:${user?.email}`);

            if (!token) {
                return;
            }

            if (shoppingCartJSON) {
                const shoppingCart = JSON.parse(shoppingCartJSON);
                setCartProducts(shoppingCart);
            }

            setProducts(await getProducts(token));
            setSearchProducts(await getProducts(token));

        }

        loadProduct();

    }, [user]);

    function search(formData: IValuesOfResearchField) {
        const token = localStorage.getItem("@TOKEN");

        if (!token) {
            return;
        }

        const { filter } = formData;
        const items = products?.filter(product => product.name.toLowerCase().includes(filter.toLowerCase()));

        if (!items) {
            return;
        }

        setSearchProducts(items);
    }

    function addToCart({ id, name, category, price, img }: ICartProducts) {

        animationProduct();

        const isFound = cartProducts.some((product) => product.id === id);

        if (!isFound) {
            const newProducts = [...cartProducts, { "id": id, "name": name, "category": category, "price": price, "img": img, "amount": 1 }]
            setCartProducts(newProducts);

            localStorage.setItem(`@SHOPPING_CART:${user?.email}`, JSON.stringify(newProducts));
            return;
        }

        const newProducts = cartProducts.filter((product) => {
            if (product.id === id) {
                return product.amount++;
            };
            return product;
        });

        setCartProducts(newProducts);
        localStorage.setItem(`@SHOPPING_CART:${user?.email}`, JSON.stringify(newProducts));
    }

    function removeToCart({ id }: any) {
        const newProducts = cartProducts.filter((product: any) => {
            const isSameProducts = product.id === id;
            console.log(isSameProducts);
            if (isSameProducts && product.amount >= 1) {
                return product.amount--;
            }

            return product;
        });

        const newProductsMoreZero = newProducts.filter((product: any) => product.amount > 0);
        setCartProducts(newProductsMoreZero);

        localStorage.setItem(`@SHOPPING_CART:${user?.email}`, JSON.stringify(newProductsMoreZero));
    }

    function removeProductInCart({ id }: { id: number }) {
        const newProducts = cartProducts.filter((product: any) => product.id !== id);

        setCartProducts(newProducts);
        localStorage.setItem(`@SHOPPING_CART:${user?.email}`, JSON.stringify(newProducts));
    }

    function removeProductsInCart() {
        setCartProducts([]);
        localStorage.setItem(`@SHOPPING_CART:${user?.email}`, JSON.stringify([]));
    }

    function animationProduct() {

        const productCountInShoppingCart = document.querySelector(`[data-animation="add"]`);
        productCountInShoppingCart?.animate([
            { background: `var(--color-secondary)` }, { background: `var(--color-primary)` }],
            { duration: 300, delay: 0, direction: "normal", fill: "both", easing: "linear", iterations: 5 })

        const productCountInModal = document.querySelector(`[data-animation="count"]`);
        productCountInModal?.animate([
            { transform: "scale3d(1, 1, 1)" }, { transform: "scale3d(1.25, 0.75, 1)" }],
            { duration: 900, delay: 0, direction: "normal", fill: "both", iterations: 5 })
    }

    return (
        <ProductContext.Provider value={{ products, search, searchProducts, cartProducts, setCartProducts, addToCart, removeToCart, removeProductInCart, removeProductsInCart }}>
            {children}
        </ProductContext.Provider>
    )
}