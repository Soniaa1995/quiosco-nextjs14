import { Product } from "@prisma/client";

//con pick hacemos la seleccion con lo que queremos trabajar es decir, del Producto, cogemos solo el id, name y price

export type OrderItem = Pick<Product, 'id' | 'name' | 'price'> & { 
    quantity: number
    subtotal: number
}