// Run this example using
// deno run --allow-net=example.com examples/fetch.ts

const url = Deno.args[0]; // catch the first argument passed to the script
const res = await fetch(url); //fetch over the net

const body = new Uint8Array(await res.arrayBuffer()); //convert buffer to bytes
await Deno.stdout.write(body); //write to terminal
