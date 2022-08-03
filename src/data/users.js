import { post } from "./api.js";

export async function login(email, password) {
  const data = await post("/users/login", { email, password });

  const userData = {
    id: data._id,
    email: data.email,
    accessToken: data.accessToken,
  };
  console.log(userData);

  sessionStorage.setItem("userData", JSON.stringify(userData)); //to convert into JSON
}
