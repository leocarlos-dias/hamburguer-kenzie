import { FieldError } from "react-hook-form/dist/types";
import { Text } from "../../styles/Typography";
import { WrapperInput } from "./style";


interface IFieldInput {
    name: string;
    type: string;
    placeholder: string;
    register: any;
    errors?: FieldError | undefined;
    children?: React.ReactNode;
}

export const Input = ({ name, type, placeholder, register, errors, children }: IFieldInput) => {
    return (
        <WrapperInput>
            <input name={name} type={type} placeholder={placeholder} {...register} />
            {!!errors && <Text color={"negative"} size={"extraSmall"} weight={"regular"}>{errors.message}</Text>}
            {children}
        </WrapperInput>
    )
}