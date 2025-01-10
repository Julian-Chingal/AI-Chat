import express from 'express'
import aiRouter from './src/AI/routes.js'
import { config } from './src/conf/envs.js'

const port = config.port
const app = express()

app.use(express.json())

app.use('/api', aiRouter )

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})