/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // xuất ra static HTML
  images: {
    unoptimized: true, // bắt buộc nếu có dùng next/image
  },
};

module.exports = nextConfig;