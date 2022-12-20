import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { ProductContext } from "../../contexts/CartContext";
import { Container, EmptyList, StyledList, StyledWrapper } from "./style";
import { Modal } from "../../components/Modal";


export const Home = () => {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const { searchProducts } = useContext(ProductContext);
    const navigate = useNavigate();

    function logout(): void {
        localStorage.removeItem("@TOKEN");
        navigate("/login");
    }

    return (
        <Container>
            <Header logout={logout} setIsOpenModal={setIsOpenModal} />
            <StyledWrapper>
                <div>
                    {isOpenModal && <Modal setIsOpenModal={setIsOpenModal} />}
                    <StyledList>
                        {!!searchProducts
                            ? searchProducts.map((product) =>
                                <Card
                                    key={product.id} id={product.id} name={product.name} category={product.category} price={product.price} img={product.img} amount={0}
                                />)
                            :
                            <>
                                <EmptyList />
                                <EmptyList />
                                <EmptyList />
                            </>
                        }
                    </StyledList>
                </div>
            </StyledWrapper>
        </Container>
    );
}