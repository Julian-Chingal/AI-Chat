import { responseAi } from "./service.js"

export const getAI = async (req, res) => {
    const message = req.body.message
    try {
        const response = await responseAi(message)
        console.log("\n",JSON.stringify(response));
        res.send(response)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}