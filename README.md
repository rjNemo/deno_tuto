# Deno

## 📑 Installation

On macOS use HomeBrew to install `deno` then update to latest version.

```shell
brew install deno
deno upgrade
```

## ⚙️ Configuration

Create a basic configuration file using:

```shell
code .vscode/settings.json
```

with the following content

```json
{
  "deno.enable": true,
  "deno.unstable": true,
  "deno.lint": true,
  "deno.import_intellisense_origins": {
    "https://deno.land": true
  },
  "[typescript]": {
    "editor.defaultFormatter": "denoland.vscode-deno"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "denoland.vscode-deno"
  }
}
```

## 🧪 Test run

Create a `index.ts` file such as

```ts
console.log("Hello, Deno");
```

then run

```shell
deno run --allow-net  index.ts
```

Checkout files in [examples](examples/) folder.

### Watch mode

```shell
deno run --watch --unstable index.ts
```
