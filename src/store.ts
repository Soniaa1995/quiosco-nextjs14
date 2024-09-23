import { create } from "zustand";
import { OrderItem } from "./types";
import { Product } from "@prisma/client";

interface Store {
    order: OrderItem[]
    addToOrder: (product: Product) => void
    increaseQuantity: (id: Product['id']) => void
    decreaseQuantity: (id: Product['id']) => void
    removeItem: (id: Product['id']) => void
}

export const useStore = create<Store>((set, get) => ({
    order: [],
    addToOrder: (product) => {

        const {categoryId, image, ...data} = product //vamos a sacar la categoria y la imagen porque aqui no nos sirven

        //hacemos condicion para saber si el producto esta en el carrito y si YA está actualizamos la cantidad y subtotal
        //Si no está, agregamos el código de abajo (el se set)
        let order: OrderItem[] = []
        if(get().order.find(item => item.id === product.id)) {
            order = get().order.map(item =>  item.id === product.id ? {
                ...item,
                quantity: item.quantity + 1,
                subtotal: item.price * (item.quantity + 1)
            }: item)
        } else {
            order = [...get().order, {
                ...data,
                quantity: 1,
                subtotal: 1 * product.price
            }]
        }

        set(() => ({    //para poder escribit en el state usamos el set
            order: order
        }))  
    },
    //va a incrementar la cantidad
    increaseQuantity: (id) => {
        set((state) => ({
            order: state.order.map(item =>  item.id === id ? {
                ...item,
                quantity: item.quantity + 1,
                subtotal: item.price * (item.quantity + 1)
            }: item)
        }))
    },
    decreaseQuantity: (id) => {
        const order = get().order.map(item => item.id === id ? {
            ...item,
            quantity: item.quantity - 1,
            subtotal: item.price * (item.quantity - 1)
        }: item)

        set(() => ({
            order
        }))
    },
    removeItem: (id) => {
        set((state) => ({
            order: state.order.filter(item => item.id !== id)
        }))
    }
}))