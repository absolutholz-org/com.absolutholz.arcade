/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: ['@arcade/library-components', '@arcade/library-common'],
	pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
	output: 'export',
	trailingSlash: true,
	distDir: 'build',
};

module.exports = nextConfig;
