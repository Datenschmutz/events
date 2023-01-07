// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Datenschmutz Events',
  tagline: 'Your one-stop for all your calendar / event planing needs',
  url: 'https://events.datenschmutz.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Datenschmutz', // Usually your GitHub org/user name.
  projectName: 'events', // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB'
      },
      de: {
        htmlLang: 'de'
      }
    }
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Datenschmutz/events/tree/main',
          editLocalizedFiles: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-8EJMZDJ83J',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Datenschmutz',
        logo: {
          alt: 'Datenschmutz Logo',
          src: 'img/logo.png',
        },
        items: [
          {to: '/calendars', label: 'Calendars', position: 'left'},
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documenation',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/datenschmutz/events',
            position: 'right',
            className: 'header-github',
            'aria-label': 'GitHub Repository',
          },
          {
            href: 'https://docs.datenschmutz.dev',
            position: 'right',
            className: 'header-datenschmutz-docs',
            'aria-label': 'Datenschmutz Docs',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Categories',
            items: [
              {
                label: 'Calendars',
                to: '/calendars',
              },
              {
                label: 'Documenation',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Contribute',
                to: 'https://github.com/Datenschmutz/docs/blob/main/CONTRIBUTING.md',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Datenschmutz/events',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/datenschmutz',
              },
              //{
              //  label: 'Stack Overflow',
              //  href: 'https://stackoverflow.com/users/20582833/datenschmutz',
              //},
            ],
          },
          {
            title: 'About',
            items: [
              {
                label: 'What does Datenschmutz mean?',
                href: '/datenschmutz',
              },
              {
                label: 'Datenschmutz IT-Docs',
                href: 'https://docs.datenschmutz.dev',
              },
              {
                label: 'T4KUUY4',
                href: 'https://github.com/T4KUUY4',
              },
            ],
          },
        ],
        logo: {
          alt: 'Datenschmutz logo',
          src: '/img/dmz-logo-main-350x-border.png',
          href: 'https://datenschmutz.org',
        },
        copyright: `Copyright © ${new Date().getFullYear()} Datenschmutz, Inc. Built with ❤️.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
