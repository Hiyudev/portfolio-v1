const { i18n } = require('./next-i18next.config');
const path = require('path');

module.exports = {
  i18n,
  localePath: path.resolve('./locales'),
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
