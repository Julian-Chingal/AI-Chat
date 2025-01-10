import { responseAi } from "./service.js"

export const getAI = async (req, res) => {
    const question = req.body.question
    try {
        const response = await responseAi(question)
        console.log("\n",JSON.stringify(response));
        res.send(response)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}