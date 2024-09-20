import { categories } from "./data/categories";
import { products } from "./data/products";
import { PrismaClient } from "@prisma/client";

//prismaClient tiene las funciones para interactuar con la base de datos

const prisma = new PrismaClient()

async function main() {
    //ingresamos cada una de las categorias y productos
    try {
        await prisma.category.createMany({
            data: categories
        })
        await prisma.product.createMany({
            data: products
        })
    } catch (error) {
        console.log(error)
    }
}

main()
    .then(async () => {
        await prisma.$disconnect //detiene la base de datos
    })
    .catch( async (e) => {
        console.log(e)
        await prisma.$disconnect
        process.exit(1)
    })