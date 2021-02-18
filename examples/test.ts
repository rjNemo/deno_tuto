// Run using deno test

import { assert } from "https://deno.land/std@0.87.0/testing/asserts.ts";

Deno.test("Hello test", () => {
  assert("Hello");
});

Deno.test("Hello test", () => {
  assert(false);
});
