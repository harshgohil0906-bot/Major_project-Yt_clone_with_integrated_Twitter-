import OpenAi from "openai"
const client = new OpenAi({apiKey: process.env.OPENAI_API_KEY})
export { client }