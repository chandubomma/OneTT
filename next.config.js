/** @type {import('next').NextConfig} */
// module.exports = {
//     images: {
//         remotePatterns: [
//           {
//             protocol: 'https',
//             hostname: 'image.tmdb.org',
//             port: '',
//             pathname: 't/p/original/**',
//           },
//         ],
//       },
// }


module.exports = { reactStrictMode: true, images: { loader: "default", minimumCacheTTL: 60, domains: [ "image.tmdb.org" ], }, }

