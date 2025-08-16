export function isUsername(username) {
  return typeof username === 'string' && username.length >= 3 && username.length <= 30;
}