/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: ['@arcade/library-components', '@arcade/library-common'],
	pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
	distDir: 'dist',
};

module.exports = nextConfig;
