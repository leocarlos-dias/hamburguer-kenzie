import { useContext } from "react"
import { ICartProducts, ProductContext } from "../../contexts/CartContext"
import { Button } from "../../styles/Button"
import { Text, TitleThree } from "../../styles/Typography"
import { Container } from "./style"

export const Card = ({ id, name, category, price, img, amount }: ICartProducts) => {
    const { addToCart } = useContext(ProductContext);

    return (
        <Container>
            <div>
                <img src={img} alt={name} />
            </div>
            <div>
                <TitleThree color={"gray600"} size={"large"} weight={"bold"}>{name}</TitleThree>
                <Text color={"gray300"} size={"extraSmall"} weight={"regular"}>{category}</Text>
                <Text color={"primary"} size={"small"} weight={"semiBold"}>R$ {price}</Text>
                <Button color={"primary"} onClick={() => addToCart({ id, name, category, price, img, amount })}>Adicionar</Button>
            </div>
        </Container >
    )
}