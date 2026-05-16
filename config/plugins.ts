module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',

      providerOptions: {
        // CDN URL
        baseUrl: env('DO_CDN_URL'),
        rootPath: 'strapi/uploads',

        s3Options: {
          credentials: {
            accessKeyId: env('DO_ACCESS_KEY_ID'),
            secretAccessKey: env('DO_SECRET_ACCESS_KEY'),
          },

          endpoint: env('DO_ENDPOINT'),
          region: env('DO_REGION', 's-ed1'),
          forcePathStyle: true,

          params: {
            Bucket: env('DO_BUCKET_NAME'),
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
