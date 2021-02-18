// Library exporting `sayHello` function

const capitalize = (word: string) =>
  `${word.charAt(0).toUpperCase()}${word.toLowerCase().slice(1)}`;

export const sayHello = (name: string) => `Hello ${capitalize(name)}`;
