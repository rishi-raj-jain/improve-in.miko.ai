module.exports = {
  routes: './src/routes.ts',
  connector: './node_modules',
  backends: {
    origin: {
      domainOrIp: 'in.miko.ai',
      hostHeader: 'in.miko.ai',
      disableCheckCert: true,
    },
  },
}
