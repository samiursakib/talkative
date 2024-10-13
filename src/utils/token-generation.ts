import jwt from "jsonwebtoken";

const API_KEY = "d9ded245-7b95-488f-90bc-fa832938b14a";
const SECRET =
  "69d93faa74f2b1b0f13e28cce704440621b92c25e04f48bd13de13b531a00fd2";

const options = {
  algorithm: "HS256",
};

const payload = {
  apikey: API_KEY,
  permissions: [`ask_join`],
  version: 2,
  roles: ["crawler", "rtc"],
};

const token = jwt.sign(payload, SECRET, options);

export default token;
