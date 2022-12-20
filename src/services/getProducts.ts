import { IProducts } from "../contexts/CartContext";
import { request } from "./api";

interface IGetProducts extends IProducts {

}

export async function getProducts(token: string): Promise<IGetProducts[]> {
    const response = await request.get<IGetProducts[]>("/products/", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data
}

