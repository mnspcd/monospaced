module.exports = {
  blog: [
    {
      mdx: {
        default: () => <div />,
        meta: {
          date: "2018-10-07",
          layout: () => <div />,
          title: "title",
        },
      },
      slug: "slug",
    },
  ],
  clients: [
    {
      href: "http://bladudflies.com",
      icon: "BladudFlies",
    },
    {
      href: "https://www.compass-group.co.uk",
      icon: "Chartwells",
    },
    {
      href: "https://www.digitas.com",
      icon: "Digitas",
    },
    {
      href: "https://www.dowjones.com",
      icon: "DowJones",
    },
    {
      href: "https://www.findmypast.co.uk",
      icon: "FindMyPast",
    },
    {
      href: "https://frfrm.com",
      icon: "Freeform",
    },
    {
      href: "http://www.thegrandunion.com",
      icon: "GrandUnion",
    },
    {
      href: "https://hanno.co",
      icon: "Hanno",
    },
    {
      href: "https://www.majorplayers.co.uk",
      icon: "MajorPlayers",
    },
    {
      href: "https://www.national-lottery.co.uk",
      icon: "NationalLottery",
    },
    {
      href: "https://www.nhs.uk",
      icon: "Nhs",
    },
    {
      href: "https://www.ogilvy.com",
      icon: "Ogilvy",
    },
    {
      href: "https://www.social360monitoring.com",
      icon: "Social360",
    },
    {
      href: "https://www.stordis.com",
      icon: "Stordis",
    },
    {
      href: "http://wearesuburb.com",
      icon: "Suburb",
    },
    {
      href: "https://thomsonreuters.com",
      icon: "ThomsonReuters",
    },
  ],
  description: "Modern front-end web development",
  footerLinks: [
    {
      href: "/legal/",
      routerLink: true,
      text: "legal",
    },
    {
      href: "/lighthouse.report.html",
      text: "lighthouse",
    },
    {
      href: "/login/",
      text: "login",
    },
    {
      href: "http://localhost:9001",
      text: "storybook",
    },
    {
      href: "https://github.com/monospaced/monospaced.com",
      text: "view-source",
    },
  ],
  mastheadLinks: [
    {
      href: "/blog/",
      routerLink: true,
      text: "blog",
    },
    {
      href: "http://localhost:9001",
      text: "design-system",
    },
    {
      href: "mailto:info@monospaced.com",
      text: "info@monospaced.com",
    },
  ],
  title: "Monospaced",
};