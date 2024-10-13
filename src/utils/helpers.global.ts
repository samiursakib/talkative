export const createId = (length: number = 10, withHyphen = false) => {
  const alphabet =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let id = "";
  for (let i = 0; i < length; i++) {
    id += alphabet.charAt(Math.random() * alphabet.length);
    if (!(i % 3) && withHyphen) id += "-";
  }
  return id;
};
