require('dotenv').config();

module.exports = {
  apiEndpoint: 'https://test-one-lang.cdn.prismic.io/api/v2',
  accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  linkResolver: (doc) => {
    if (doc.type === 'lecturer') {
      return `/${doc.lang}/lecturers/${doc.uid}`
    }
    if (doc.type === 'page') {
      return `/${doc.lang}/${doc.uid}`
    }
    return `/${doc.lang}`
  },
  hrefResolver: (doc) => {
    if (doc.type === 'lecturer') {
      return `/${doc.lang}/lecturers/${doc.uid}`
    }
    if (doc.type === 'page') {
      return `/${doc.lang}/${doc.uid}`
    }
    return `/${doc.lang}`
  }
};