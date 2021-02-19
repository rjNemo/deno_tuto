// Run using deno test

import { assert } from "../deps.ts";

Deno.test("Hello test", () => {
  assert("Hello");
});

Deno.test("Hello test", () => {
  assert(false);
});
