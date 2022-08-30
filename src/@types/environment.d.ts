declare namespace NodeJS {
  interface ProcessEnv {
    STRIPE_API_KEY: string;
    GITHUB_CLIENT_ID: string;
    GITHUB_CLIENT_SECRET: string;
    FAUNADB_KEY: string;
    SIGNING_KEY: string;
  }
}