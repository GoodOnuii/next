import Document, { Html, Head, Main, NextScript } from 'next/document';

import { getCssText } from '@/styles/stitches.config';

class _Document extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default _Document;
