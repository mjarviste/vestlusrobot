import {openai } from "@ai-sdk/openai"
import { streamText } from "ai"

// const openai = createOpenAI({
//     apiKey: process.env.OPEN_API_KEY // should ideally be loaded from external place such as env variable
// });

export async function POST(req:Request) {
    const {messages} = await req.json()

    const result = await streamText({
        model: openai('gpt-4'),
        messages,
    });
    return result.toDataStreamResponse()

}