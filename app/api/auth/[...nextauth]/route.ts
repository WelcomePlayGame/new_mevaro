import NextAuth, { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { userByEmail } from '@/lib/email';

interface CustomUser extends User {
  role?: string;
}

declare module 'next-auth' {
  interface Session {
    user?: CustomUser;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role?: string;
  }
}

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
    CredentialsProvider({
      name: 'credentials',
      authorize: async (credentials) => {
        if (credentials?.email === process.env.ADMIN_EMAIL) {
          const email = process.env.ADMIN_EMAIL;
          const name = process.env.ADMIN_USERNAME;
          const role = process.env.ADMIN_ROLE;
          return {
            email: email,
            name: name,
            role: role,
          } as CustomUser;
        } else {
          const user = await userByEmail(credentials?.email as string);
          if (user?.email === credentials?.email) {
            return {
              email: user?.email,
              name: user?.name,
              role: user?.role,
            } as CustomUser;
          } else {
            throw new Error('Not user');
          }
        }
      },
      credentials: {
        email: {
          label: 'email',
          type: 'email',
        },
        password: { label: 'password', type: 'password' },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const customUser = user as CustomUser;
        token.role = customUser.role || 'guest';
      } else if (!token.role) {
        token.role = 'guest';
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
