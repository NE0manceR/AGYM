module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'agymdb'),
        username: env('DATABASE_USERNAME', 'agym'),
        password: env('DATABASE_PASSWORD', 'CQP&Wy3rC3zD'),
      },
      options: {
        useNullAsDefault: true,
        "charset": "utf8mb4_unicode_ci"
      }
    },
  },
});
