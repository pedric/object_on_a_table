import messages from "./messages";
const decor = "\n**************************************************\n";

export function messageUserInConsole(message) {
  console.log(`${decor}\n${message}\n${decor}`);
}

export function logTheRules() {
  const decor = "\n**************************************************\n";
  console.log(`${decor}${messages["rules"]}${decor}`);
}

export function logError(err) {
  let error = err ? err : messages["defaultError"];
  console.log(`${decor}\n${error}\n${decor}`);
}

export default { messageUserInConsole, logTheRules, logError };
