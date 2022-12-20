import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { IValuesOfFormLogin } from "../components/Form/Login";
import { IValuesOfFormRegister } from "../components/Form/Register";
import { request } from "../services/api";
import { toast } from "react-toastify";

interface IUserContext extends IUserContextProps {
    user: IUser | null;
    userLogin: (formValue: IValuesOfFormLogin) => Promise<void>
    userRegister: (formValue: IValuesOfFormRegister) => Promise<void>
    wait: boolean;
    setWait: React.Dispatch<React.SetStateAction<boolean>>;
    loading: boolean;
}

interface IUserContextProps {
    children: React.ReactNode
}

interface IGetUserByToken extends IUser {
}

interface IPostUserByRegister extends IGetUserByLogin {

}

interface IUser {
    email: string;
    name: string;
    id: number;
}

interface IGetUserByLogin {
    accessToken: string;
    user: IUser;
}

export interface IJwt {
    sub: string;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserContextProps) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [loading, setLoading] = useState<boolean>(false)
    const [wait, setWait] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {

        async function loadUser() {
            const token = localStorage.getItem("@TOKEN");

            if (!token) {
                setWait(false);
                return;
            }

            const { sub } = parseJwt(token);

            try {
                setWait(true);

                const response = await request.get<IGetUserByToken>("/users/" + sub, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                setUser(response.data);

            } catch {
                localStorage.clear();

            } finally {
                setWait(false);

            }
        }

        function parseJwt(token: string): IJwt {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));

            return JSON.parse(jsonPayload);
        }

        loadUser();
    }, []);

    async function userLogin(formValue: IValuesOfFormLogin): Promise<void> {

        try {
            setLoading(true);
            const response = await request.post<IGetUserByLogin>("/login", formValue);

            setUser(response.data.user);
            localStorage.setItem("@TOKEN", response.data.accessToken);

            toast.success("Login efetuado com sucesso!");
            navigate("/");

        } catch (err) {
            if (axios.isAxiosError(err)) {
                toast.error(err.response?.data);
            }

        } finally {
            setLoading(false);

        }
    }

    async function userRegister(formValue: IValuesOfFormRegister): Promise<void> {

        try {
            setLoading(true);
            await request.post<IPostUserByRegister>("/users", formValue);

            toast.success("Conta registada com sucesso!");
            navigate("/login");
        } catch (err) {
            if (axios.isAxiosError(err)) {
                toast.error(err.response?.data);
            }

        } finally {
            setLoading(false);

        }
    }

    return (
        <UserContext.Provider value={{ user, userLogin, userRegister, wait, loading, setWait, children }}>
            {children}
        </UserContext.Provider>
    );
}