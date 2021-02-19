// Run this example using
// deno run --allow-net examples/echo_server.ts
// nc localhost 8080
// echo

const hostname = "0.0.0.0";
const port = 8080;

const listener = Deno.listen({ hostname, port });

console.log(`Listen on ${hostname}:${port}`);
for await (const conn of listener) {
  console.log("Connection initiated");
  Deno.copy(conn, conn);
}
