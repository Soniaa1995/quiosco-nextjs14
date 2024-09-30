import { prisma } from "@/src/lib/prisma"


export async function GET(){ //next mapea esta funcion por si sola

    const orders = await prisma.order.findMany({
        where: {
            status: false //solo traemos las órdenes incompletas
        },
        include: { //aqui es para incluir los productos de cada orden
            orderProducts: {
                include: {
                    product: true
                }
            }
        }
    })

    return Response.json(orders)
}