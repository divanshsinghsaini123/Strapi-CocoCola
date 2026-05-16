module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',

      providerOptions: {
        // CDN URL
        baseUrl: env('GCORE_CDN_URL'),

        s3Options: {
          credentials: {
            accessKeyId: env('GCORE_ACCESS_KEY_ID'),
            secretAccessKey: env('GCORE_SECRET_ACCESS_KEY'),
          },

          endpoint: env('GCORE_ENDPOINT'),
          region: env('GCORE_REGION'),

          params: {
            Bucket: env('GCORE_BUCKET_NAME'),

            // Folder inside bucket
            Prefix: 'strapi/uploads/',
          },
        },
      },

      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});