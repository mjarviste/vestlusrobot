import { MessageListType } from "@/app";
import {openai } from "@ai-sdk/openai"
import { CoreMessage, streamText } from "ai"

export async function POST(req:Request) {
    const {messages}: {messages:CoreMessage[]} = await req.json()

    const result = await streamText({
        model: openai('gpt-4'),
        messages,
    });
    return result.toDataStreamResponse()
}