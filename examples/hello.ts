// Library exporting `sayHello` function

/**
 * Title case the given word. First character uppercase and the rest lowercase.
 * @param {string} word 
 * @returns {string} Capitalized word. 
 */
const capitalize = (word: string): string =>
  `${word.charAt(0).toUpperCase()}${word.toLowerCase().slice(1)}`;

/**
 * Greets the named user after name capitalization
 * @param {string} name  
 * @returns {string} Greeting to the user 
 */
export const sayHello = (name: string): string => `Hello ${capitalize(name)}`;
