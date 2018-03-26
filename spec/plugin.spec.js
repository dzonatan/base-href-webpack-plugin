const removeDir = require('rimraf');
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BaseHrefWebpackPlugin } = require('../build/index');

const OUTPUT_DIR = path.join(__dirname, './dist-test');

function getFileContent(filename) {
  return fs.readFileSync(path.join(OUTPUT_DIR, filename)).toString();
}

const baseConfig = (baseHrefConfig, template) => ({
  context: __dirname,
  entry: path.join(__dirname, 'dummy-entry.js'),
  output: {
    path: OUTPUT_DIR
  },
  plugins: [
    new HtmlWebpackPlugin({ template }),
    new BaseHrefWebpackPlugin(baseHrefConfig)
  ],
  mode: 'production'
});

describe('base href webpack plugin', () => {
  afterEach(done => removeDir(OUTPUT_DIR, done));

  it('should do nothing when baseHref is null', (done) => {
    const config = baseConfig({ baseHref: null }, 'index-without-base.html');

    webpack(config, (err, stats) => {
      const htmlResult = getFileContent('index.html');
      expect(/<base href="\/myUrl\/">/.test(htmlResult)).toBeFalsy('has <base href="/myUrl/">');
      done();
    });
  });

  it('should insert base tag when not exist', (done) => {
    const config = baseConfig({ baseHref: '/myUrl/' }, 'index-without-base.html');

    webpack(config, (err, stats) => {
      const htmlResult = getFileContent('index.html');
      expect(/<base href="\/myUrl\/">/.test(htmlResult)).toBeTruthy('has <base href="/myUrl/">');
      done();
    });
  });

  it('should replace href attribute when base tag already exists', (done) => {
    const config = baseConfig({ baseHref: '/myUrl/' }, 'index-with-base.html');

    webpack(config, (err, stats) => {
      const htmlResult = getFileContent('index.html');
      expect(/<base href="\/myUrl\/">/.test(htmlResult)).toBeTruthy('has <base href="/myUrl/">');
      expect(/<base href="\/oldUrl\/">/.test(htmlResult)).toBeFalsy('does not have <base href="/oldUrl/">');
      done();
    });
  });
});
