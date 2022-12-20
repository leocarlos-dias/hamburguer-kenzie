import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container, StyledLinkDecoration, StyledWrapper } from "../style";
import { TitleThree } from "../../../styles/Typography";
import { Input } from "../../Input";
import { Button } from "../../../styles/Button";
import PacmanLoader from "react-spinners/PacmanLoader";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

export interface IValuesOfFormRegister {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
}

export const Form = () => {
    const { userRegister, loading } = useContext(UserContext);
    const schema = yup.object().shape({
        name: yup.string().required("É necessário preencher o campo do nome."),
        email: yup.string().required("É necessário preencher o campo do e-mail.").email("É necessário ser um e-mail."),
        password: yup
            .string()
            .required("É necessário inserir uma senha")
            .matches(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula.")
            .matches(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula.")
            .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
            .matches(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um caractere especial")
            .min(8, "É necessário pelo menos 8 caracteres"),

        confirmPassword: yup
            .string()
            .required("É necessário inserir uma senha").oneOf([yup.ref('password')], "As senhas devem corresponder"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm<IValuesOfFormRegister>({
        mode: "onChange",
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<IValuesOfFormRegister> = (formValue) => {
        userRegister(formValue);
    }

    return (
        <Container onSubmit={handleSubmit(onSubmit)}>
            <StyledWrapper>
                <div>
                    <TitleThree size={"medium"} color={"gray600"} weight={"bold"}>Cadastro</TitleThree>
                    <StyledLinkDecoration to={"/login"}>Retornar para o login</StyledLinkDecoration>
                </div>

                <fieldset>
                    <Input name={"name"} type={"text"} placeholder={"Insira um nome"} register={register("name")} errors={errors.name} />
                    <Input name={"email"} type={"email"} placeholder={"Insira um e-mail"} register={register("email")} errors={errors.email} />
                    <Input name={"password"} type={"password"} placeholder={"Insira uma senha"} register={register("password")} errors={errors.password} />
                    <Input name={"confirmPassword"} type={"password"} placeholder={"Confirme a senha"} register={register("confirmPassword")} errors={errors.confirmPassword} />
                </fieldset>
                {loading
                    ? <PacmanLoader color="#27AE60" size={30} speedMultiplier={2} />
                    : <Button color={"gray"} type="submit">Cadastrar</Button>
                }
            </StyledWrapper>
        </Container>);
}