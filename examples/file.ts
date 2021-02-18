// Run this example using
// deno run --allow-read examples/file.ts

const filenames = Deno.args;

for (const filename of filenames) {
  const file = await Deno.open(filename);
  await Deno.copy(file, Deno.stdout);
  file.close();
}
