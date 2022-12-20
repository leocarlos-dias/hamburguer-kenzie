import { Text, TitleThree } from "../../styles/Typography";
import { BottomSide, Container, EmptyCart, HeaderModal, MainModal, ModalWrapper, StyledListModal, TopSide } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { CardModal } from "../CardModal";
import { Button } from "../../styles/Button";
import { useContext } from "react";
import { ProductContext } from "../../contexts/CartContext";

export const Modal = ({ setIsOpenModal }: { setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const { cartProducts, removeProductsInCart } = useContext(ProductContext);

    function closeModal() {
        setIsOpenModal(false);
    }

    return (
        <Container>
            <ModalWrapper>
                <HeaderModal>
                    <TitleThree size={"large"} color={"white"} weight={"bold"} >Carrinho de Compras</TitleThree>
                    <button onClick={closeModal}>
                        <AiOutlineClose />
                    </button>
                </HeaderModal>
                <MainModal>
                    {cartProducts.length > 0
                        ? <>
                            <TopSide>
                                <StyledListModal>
                                    {cartProducts.map((product) =>
                                        <CardModal key={product.id} id={product.id} name={product.name} img={product.img} category={product.category} price={product.price} amount={product.amount} />)}
                                </StyledListModal>
                            </TopSide>
                            <hr />
                            <BottomSide>
                                <div>
                                    <Text size={"small"} color={"gray600"} weight={"bold"}>Total</Text>
                                    <Text size={"small"} color={"gray300"} weight={"bold"}>
                                        R${(cartProducts.length > 0) ? cartProducts.reduce((acc, cur) => acc + (cur.price * cur.amount), 0).toFixed(2) : "0,00"}
                                    </Text>
                                </div>
                                <Button color={"gray"} onClick={removeProductsInCart}>Remover Todos</Button>
                            </BottomSide>
                        </>
                        :
                        <EmptyCart>
                            <TitleThree color={"gray600"} size={"large"} weight={"bold"}>Sua sacola está vazia</TitleThree>
                            <Text color={"gray300"} size={"small"} weight={"regular"}>Adicione itens</Text>
                        </EmptyCart>
                    }
                </MainModal>
            </ModalWrapper>
        </Container >
    )
}