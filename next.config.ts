import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  experimental: {
    // next/font fetches Inter + Source Serif 4 from Google Fonts at build time
    // (app/[locale]/layout.tsx). On some local networks that handshake fails with a
    // TLS error and breaks `npm run build`. Trusting the system certificate store
    // fixes it. This mirrors NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS=1 that
    // netlify.toml already sets for CI, so a plain `npm run build` now works locally too.
    turbopackUseSystemTlsCerts: true,
  },
};

export default withNextIntl(nextConfig);
