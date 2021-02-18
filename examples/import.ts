// Import as ES modules

import { sayHello } from "./hello.ts";

const name = Deno.args[0];

console.log(sayHello(name));
