import CredentialsProvider from "next-auth/providers/credentials";
import { use } from "react";

export const authOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Tu Email" },
        password: {
          label: "Contraseña",
          type: "password",
          placeholder: "Tu contraseña",
        },
      },
      async authorize(credentials, req) {},
    }),
  ],
};
