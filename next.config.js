/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DB_URL: "mongodb://localhost:27017/byitnow"
    }
}

module.exports = nextConfig
