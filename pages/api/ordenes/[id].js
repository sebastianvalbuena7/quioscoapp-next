import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {
    const prima = new PrismaClient()

    if (req.method === 'POST') {
        const { id } = req.query
        const ordenActualizada = await prima.orden.update({
            where: {
                id: parseInt(id)
            },
            data: {
                estado: true
            }
        })
        res.status(200).json(ordenActualizada)
    }
}