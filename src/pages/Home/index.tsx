import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { ProductContext } from "../../contexts/CartContext";
import { Container, StyledList, EmptyCart, StyledWrapper } from "./style";
import { Modal } from "../../components/Modal";

export const Home = () => {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const { searchProducts, infiniteScroll } = useContext(ProductContext);
    const [infinite, setInfinite] = useState<boolean>(true)
    const navigate = useNavigate();
    const infiniteScrollRef = useRef<HTMLDivElement>(null);

    function logout(): void {
        localStorage.removeItem("@TOKEN");
        navigate("/login");
    }

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver(([IntersectionObserverEntry]) => {
            const intersection = IntersectionObserverEntry.isIntersecting;

            if (intersection) {
                infiniteScroll();
            }
        })


        if (infiniteScrollRef.current) {
            intersectionObserver.observe(infiniteScrollRef.current);
        }

        return (() => {
            intersectionObserver.disconnect();
        })

    }, [infiniteScrollRef])

    return (
        <Container>
            <Header logout={logout} setIsOpenModal={setIsOpenModal} />
            <StyledWrapper>
                <div>
                    {isOpenModal && <Modal setIsOpenModal={setIsOpenModal} />}
                    <StyledList>
                        {!!searchProducts
                            ? searchProducts.map((product) => <Card key={product.id} id={product.id} name={product.name} category={product.category} price={product.price} img={product.img} amount={0} />)
                            :
                            <>
                                <EmptyCart />
                                <EmptyCart />
                                <EmptyCart />
                            </>
                        }

                        {infinite &&
                            <>
                                <EmptyCart ref={infiniteScrollRef} />
                                <EmptyCart />
                                <EmptyCart />
                            </>
                        }
                    </StyledList>
                </div>
            </StyledWrapper>
        </Container>
    );
}