import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserContext } from "../../../contexts/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container, StyledWrapper } from "../style";
import { Paragraph, TitleThree } from "../../../styles/Typography";
import { Input } from "../../Input";
import { Button, StyledLink } from "../../../styles/Button";
import { PacmanLoader } from "react-spinners";

export interface IValuesOfFormLogin {
    email: string,
    password: string,
}

export const Form = () => {
    const { userLogin, loading } = useContext(UserContext);

    const schema = yup.object().shape({
        email: yup.string().required("É necessário preencher este campo.").email("É necessário ser um e-mail."),
        password: yup.string().required("É necessário preencher este campo."),
    })

    const { register, handleSubmit, formState: { errors } } = useForm<IValuesOfFormLogin>({
        mode: "onBlur",
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<IValuesOfFormLogin> = (formData) => {
        userLogin(formData)
    }

    return (
        <Container onSubmit={handleSubmit(onSubmit)}>
            <StyledWrapper>

                <TitleThree size={"medium"} color={"gray600"} weight={"bold"}>Login</TitleThree>

                <fieldset>
                    <Input name={"email"} type={"email"} placeholder={"Insira o seu e-mail"} register={register("email")} errors={errors.email} />
                    <Input name={"password"} type={"password"} placeholder={"Insira o seu e-mail"} register={register("password")} errors={errors.password} />
                </fieldset>

                {loading
                    ? <PacmanLoader color="#27AE60" size={30} speedMultiplier={2} />
                    : <Button color={"primary"} type="submit">Logar</Button>
                }

                <Paragraph size={"extraSmall"} color={"gray50"} weight={"regular"} align={"center"}>Crie sua conta para saborear muitas delícias e matar sua fome!</Paragraph>

                <StyledLink to={"/register"} color={"gray"}>Cadastrar</StyledLink>

            </StyledWrapper>
        </Container >);
}