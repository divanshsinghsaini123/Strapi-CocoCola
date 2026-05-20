// module.exports = ({ env }) => ({
//   upload: {
//     config: {
//       provider: 'aws-s3',
//       security: {
//         allowedTypes: [
//           'image/*',
//           'video/*',
//           'audio/*',
//           'application/pdf',
//           'text/plain',
//           'text/csv',
//           'application/json',
//         ],
//       },

//       providerOptions: {
//         // CDN URL
//         baseUrl: env('GCORE_CDN_URL'),
//         rootPath: 'strapi/uploads',

//         s3Options: {
//           credentials: {
//             accessKeyId: env('GCORE_ACCESS_KEY_ID'),
//             secretAccessKey: env('GCORE_SECRET_ACCESS_KEY'),
//           },

//           endpoint: env('GCORE_ENDPOINT'),
//           region: env('GCORE_REGION', 's-ed1'),
//           forcePathStyle: false,

//           params: {
//             Bucket: env('GCORE_BUCKET_NAME'),
//           },
//         },
//       },

//       actionOptions: {
//         upload: {},
//         uploadStream: {},
//         delete: {},
//       },
//     },
//   },
// });
module.exports = ({ env }) => {

  console.log({
    endpoint: env('GCORE_ENDPOINT'),
    region: env('GCORE_REGION'),
    baseUrl: env('GCORE_CDN_URL'),
  });

  return {
    upload: {
      config: {
        provider: 'aws-s3',
        security: {
          allowedTypes: [
            'image/*',
            'video/*',
            'audio/*',
            'application/pdf',
            'text/plain',
            'text/csv',
            'application/json',
          ],
        },

        providerOptions: {
          baseUrl: env('GCORE_CDN_URL'),
          rootPath: 'strapi/uploads',

          s3Options: {
            credentials: {
              accessKeyId: env('GCORE_ACCESS_KEY_ID'),
              secretAccessKey: env('GCORE_SECRET_ACCESS_KEY'),
            },

            endpoint: env('GCORE_ENDPOINT'),
            region: env('GCORE_REGION', 's-ed1'),
            forcePathStyle: false,

            params: {
              Bucket: env('GCORE_BUCKET_NAME'),
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
  };
};