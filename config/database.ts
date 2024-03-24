module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 50570),
      database: env("DATABASE_NAME", "postgres"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "amPhfunSnZCEWDjUbmRezAIcfCnBdlTi"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});

////////////////