module.exports = function(config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
        'karma-jasmine',
        'karma-chrome-launcher',
        'karma-jasmine-html-reporter',
        '@angular-devkit/build-angular/plugins/karma'
      ],
      client: {
        clearContext: false // mantiene la salida de Jasmine en el navegador
      },
      jasmineHtmlReporter: {
        suppressAll: true // elimina trazas duplicadas
      },
      reporters: ['progress', 'kjhtml'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['Chrome'],
      singleRun: true,
      restartOnFileChange: true
    });
  };
  