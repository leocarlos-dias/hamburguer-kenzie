import React from "react";
import { Container } from "./style"
import { Paragraph } from "../../styles/Typography";
import shoppingBag from "../../assets/img/shopping-bag.svg"
import logo from "../../assets/img/logo.svg";
import illustration from "../../assets/img/illustration-2.svg"

export const Illustration = ({ children }: { children?: React.ReactNode }) => {
    return (
        <Container>
            <div>
                <h1 hidden>Burguer Kenzie</h1>
                <img src={logo} alt="Burguer Kenzie" />
            </div>

            <div>
                <figure>
                    <img src={shoppingBag} alt="A vida é como um sanduíche, é preciso recheá-la com os melhores ingredientes." />
                </figure>
                <Paragraph size={"extraSmall"} color={"gray300"} weight={"regular"}>A vida é como um sanduíche, é preciso recheá-la com os <strong>melhores</strong> ingredientes.</Paragraph>
            </div>
            <img src={illustration} alt="Ilustração" />
        </Container>
    );
}