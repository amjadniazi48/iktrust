    // strapi-api/config/database.js
    module.exports = ({ env }) => ({
        connection: {
          client: 'postgres',
          connection: {
            host: env('PGHOST', '127.0.0.1'),
            port: env.int('PGPORT', 50570),
            database: env('PGDATABASE', 'railway'),
            user: env('PGUSER', 'postgres'),
            password: env('PGPASSWORD', 'amPhfunSnZCEWDjUbmRezAIcfCnBdlTi'),
        
            ssl: {
              rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
            },
          },
          debug: false,
        },
      });