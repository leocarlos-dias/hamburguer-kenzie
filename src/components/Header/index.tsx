import { Container, CountWrapper, InputWrapper, StyledWrapper } from "./style"
import logo from "../../assets/img/logo.svg";
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineLogout } from "react-icons/ai"
import { SubmitHandler, useForm } from "react-hook-form";
import { useContext } from "react";
import { ProductContext } from "../../contexts/CartContext";
import { Text } from "../../styles/Typography";
import Switch from "react-switch";
import { ThemeContext } from "../../contexts/ThemeContext";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

interface IHeaderProps {
    logout: () => void;
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IValuesOfResearchField {
    filter: string;
}

export const Header = ({ logout, setIsOpenModal }: IHeaderProps) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { search, cartProducts, shoppingCartRef } = useContext(ProductContext);
    const { register, handleSubmit } = useForm<IValuesOfResearchField>();

    function openModal() {
        setIsOpenModal(true);
    }

    const onSubmit: SubmitHandler<IValuesOfResearchField> = (formData) => {
        search(formData)
    }

    return (
        <Container>
            <StyledWrapper>
                <div>
                    <h1 hidden>Burguer Kenzie</h1>
                    <img src={logo} alt="Burguer Kenzie" />

                    <div>
                        <MdOutlineDarkMode />
                        <Switch
                            onChange={toggleTheme}
                            checked={theme.title === "dark"}
                            checkedIcon={false}
                            uncheckedIcon={false}
                            height={10}
                            width={40}
                            handleDiameter={20}
                            offColor={theme.colors.colorPrimary}
                            onColor={theme.colors.colorSecondary}
                        />
                        <MdDarkMode />
                    </div>

                </div>
                <div>
                    <InputWrapper onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" {...register("filter")} />
                        <button>
                            <AiOutlineSearch />
                        </button>
                    </InputWrapper>

                    <CountWrapper onClick={openModal}>
                        <div ref={shoppingCartRef}>
                            <Text color={"white"} size={"small"} weight={"bold"}>{cartProducts.length}</Text>
                        </div>
                        <AiOutlineShoppingCart />
                    </CountWrapper>

                    <button onClick={logout}>
                        <AiOutlineLogout />
                    </button>
                </div>
            </StyledWrapper>
        </Container >
    )
}