import axios from "axios";

const strapiUrl = process.env.STRAPI_URL;

export async function signIn({ email, password }) {
  const res = await axios.post(`${strapiUrl}/api/auth/local`, {
    identifier: email,
    password,
  });
  return res.data;
}

export async function getUserInfo(jwt) {
  try {
    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
    };

    var url = `${strapiUrl}/api/users/me?populate=role`;
    const res = await axios.get(url, config);
    return res.data;
  } catch (error) {
    return error;
  }
}
