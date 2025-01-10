import { configDotenv } from "dotenv";
configDotenv();

export const AI = {
    token: process.env.CLOUDFLARE_TOKEN,
    url: process.env.CLOUDFLARE_URL
}

export const config = {
    port: process.env.PORT || 3000 
}