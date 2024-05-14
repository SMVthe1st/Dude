import "dotenv/config";
import { HfInference } from "@huggingface/inference";

const hf = new HfInference(process.env.HF_API_KEY);

const output = await hf.conversational({
  model: "microsoft/DialoGPT-medium",
  // model: "microsoft/phi-2",
  inputs: "Heya!",
});

export const OUTPUT = output.generated_text;

// console.log(output.generated_text);
