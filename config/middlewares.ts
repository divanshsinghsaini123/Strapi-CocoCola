const gcoreCdnUrl = process.env.GCORE_CDN_URL || '';

export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'img-src': gcoreCdnUrl ? ["'self'", 'data:', gcoreCdnUrl] : ["'self'", 'data:'],
          'media-src': gcoreCdnUrl ? ["'self'", 'data:', gcoreCdnUrl] : ["'self'", 'data:'],
          'connect-src': gcoreCdnUrl ? ["'self'", gcoreCdnUrl] : ["'self'"],
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
