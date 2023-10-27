import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Tracklancer Documentation</span>,
  chat: {
    link: 'https://letrixlabs.com/discord',
  },
  docsRepositoryBase: 'https://github.com/letrixlabs/tracklancer-docs',
  feedback: {
    content: null,
  },
  banner: {
    dismissible: false,
    key: 'banner-1',
    text: <a href="https://tracklancer.io" target="_blank">
      These docs are not fully published/finalised yet.
    </a>,
  },
  footer: {
    text: (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
          <p style={{
            fontSize: '14px',
          }}>
            Copyright &copy; {new Date().getFullYear()} <a href="https://tracklancer.io" target="_blank">Tracklancer</a>. All rights reserved.
          </p>
          <p style={{
            fontSize: '12px',
          }}>
            Tracklancer is a Letrix Labs product.
          </p>
        </div>
    ),
  },
}

export default config
