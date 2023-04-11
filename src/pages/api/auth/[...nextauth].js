import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn, getUserInfo } from "../../../services/auth";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Correo electrónico",
          type: "text",
          placeholder: "correo@electronico.com",
        },
        password: { label: "Contraseña", type: "password" },
      },
      theme: {
        colorScheme: "dark", // "auto" | "dark" | "light"
        brandColor: "#27237b ", // Hex color code
        logo: "https://www.macrodatum.com/assets/img/LogoOriginal500x150.png", // Absolute URL to image
        buttonText: "#231f20", // Hex color code
      },
      async authorize(credentials, req) {
        if (credentials == null) return null;
        try {
          const { user, jwt } = await signIn({
            email: credentials.username,
            password: credentials.password,
          });
          const userInfo = await getUserInfo(jwt);

          const userComposed = { ...userInfo, jwt };

          return userComposed;
        } catch (error) {
          // Sign In Fail
          return null;
        }
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      session.id = token.id;
      session.jwt = token.jwt;
      session.user = token.user;
      return Promise.resolve(session);
    },
    jwt: async ({ token, user }) => {
      const isSignIn = user ? true : false;
      if (isSignIn) {
        token.id = user.id;
        token.jwt = user.jwt;
        token.user = user;
      }
      return Promise.resolve(token);
    },
  },
};

export default NextAuth(authOptions);
