import { object, string, number, boolean, array } from 'valibot';
import * as v from 'valibot';


export const DraftProductSchema = object({
    name: string(),
    price: number()
})

export const ProductShema = object({
    id: number(),
    name: string(),
    price: number(),
    availability: boolean()
})

export const ProductsShema = array(ProductShema)
export type Product = v.InferOutput<typeof ProductShema>