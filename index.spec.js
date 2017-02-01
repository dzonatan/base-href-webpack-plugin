const { BaseHrefWebpackPlugin } = require('./build/index');

function mockCompiler(indexHtml, callback) {
  return {
    plugin: (event, compilerCallback) => {
      const compilation = {
        plugin: (hook, compilationCallback) => {
          const htmlPluginData = { html: indexHtml };
          compilationCallback(htmlPluginData, callback);
        }
      };
      compilerCallback(compilation);
    }
  };
}

describe('base href webpack plugin', () => {
  const html = `
    <html>
      <head></head>
      <body></body>
    </html>`;

  it('should do nothing when baseHref is null', () => {
    const plugin = new BaseHrefWebpackPlugin({ baseHref: null });
    const rawHtml = `
      <html>
        <head></head>
        <body></body>
      </html>
    `;

    const compiler = mockCompiler(rawHtml, (x, htmlPluginData) => {
      expect(htmlPluginData.html).toEqual(rawHtml);
    });
    plugin.apply(compiler);
  });

  it('should insert base tag when not exist', () => {
    const plugin = new BaseHrefWebpackPlugin({ baseHref: '/' });
    const rawHtml = `
      <html>
        <head></head>
        <body></body>
      </html>
    `;
    const expectHtml = `
      <html>
        <head><base href="/"></head>
        <body></body>
      </html>
    `;

    const compiler = mockCompiler(rawHtml, (x, htmlPluginData) => {
      expect(htmlPluginData.html).toEqual(expectHtml);
    });
    plugin.apply(compiler);
  });

  it('should replace href attribute when base tag already exists', () => {
    const plugin = new BaseHrefWebpackPlugin({ baseHref: '/myUrl/' });
    const rawHtml = `
      <html>
        <head><base href="/" target="_blank"></head>
        <body></body>
      </html>
    `;
    const expectHtml = `
      <html>
        <head><base href="/myUrl/" target="_blank"></head>
        <body></body>
      </html>
    `;

    const compiler = mockCompiler(rawHtml, (x, htmlPluginData) => {
      expect(htmlPluginData.html).toEqual(expectHtml);
    });
    plugin.apply(compiler);
  });
});
