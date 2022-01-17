const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  images: {
    domains: ['via.placeholder.com'],
  },
  async redirects() {
    return [
      {
        source: '/social/twitter',
        destination: 'https://twitter.com/Yuki2dev',
        permanent: true,
      },
      {
        source: '/social/github',
        destination: 'https://github.com/KeysHD',
        permanent: true,
      },
      {
        source: '/social/discord',
        destination: 'https://discord.gg/MvZvtbUJJc',
        permanent: true,
      },
    ];
  },
};
