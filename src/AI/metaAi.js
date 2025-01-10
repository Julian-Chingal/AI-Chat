import { AI } from "../conf/envs.js";

export async function Run(model, input) {
    // console.log("model", model);
    // console.log("input", input);
    console.log("Generando respuesta...");
    const response = await fetch(
      `${AI.url}/${model}`,
      {
        headers: { Authorization: `Bearer ${AI.token}` },
        method: "POST",
        body: JSON.stringify(input),
      }
    );
    const result = await response.json();
    return result;
  }