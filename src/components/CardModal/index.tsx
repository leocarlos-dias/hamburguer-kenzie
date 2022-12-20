import { useContext } from "react";
import { Text, TitleThree } from "../../styles/Typography";
import { ButtonsWrapper, Container, StyledIoMdTrash } from "./style";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { ProductContext } from "../../contexts/CartContext";
import { IoMdTrash } from "react-icons/io"

interface ICardModalProps {
    id: number;
    name: string;
    price: number;
    category: string;
    img: string;
    amount: number;
}


export const CardModal = ({ id, name, price, category, img, amount }: ICardModalProps) => {
    const { removeProductInCart, addToCart, removeToCart } = useContext(ProductContext);

    return (
        <Container>
            <img src={img} alt={name} />
            <div>
                <TitleThree color={"gray600"} size={"large"} weight={"bold"}>{name}</TitleThree>
                <ButtonsWrapper>
                    <button onClick={() => removeToCart({ id, name, price, category, img, amount })}>
                        <AiOutlineMinus />
                    </button>
                    <Text size={"extraSmall"} color={"gray600"} weight={"regular"}>{amount}</Text>
                    <button onClick={() => addToCart({ id, name, price, category, img, amount })}>
                        <AiOutlinePlus />
                    </button>
                </ButtonsWrapper>
            </div>
            <StyledIoMdTrash onClick={() => removeProductInCart({ id })}>
                <IoMdTrash />
            </StyledIoMdTrash>
        </Container>
    )
}