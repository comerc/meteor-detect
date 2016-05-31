Package.describe({
  name: 'comerc:detect',
  summary: 'Library to detect browser, os and device based on the UserAgent String',
  version: '2.2.2',
  git: 'https://github.com/comerc/meteor-detect.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.use('jquery', 'client');
  api.addFiles([
    'detect.js',
  ], 'client');
});
