import React from "react";

/* eslint-disable react/display-name */
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
      label: "Bladud Flies!",
    },
    {
      href: "https://www.compass-group.co.uk",
      icon: "Chartwells",
      label: "Chartwells",
    },
    {
      href: "https://www.digitas.com",
      icon: "Digitas",
      label: "Digitas",
    },
    {
      href: "https://www.dowjones.com",
      icon: "DowJones",
      label: "Dow Jones",
    },
    {
      href: "https://www.findmypast.co.uk",
      icon: "FindMyPast",
      label: "Find My Past",
    },
    {
      href: "https://frfrm.com",
      icon: "Freeform",
      label: "Freeform Labs",
    },
    {
      href: "http://www.thegrandunion.com",
      icon: "GrandUnion",
      label: "Grand Union",
    },
    {
      href: "https://hanno.co",
      icon: "Hanno",
      label: "Hanno",
    },
    {
      href: "https://www.majorplayers.co.uk",
      icon: "MajorPlayers",
      label: "Major Players",
    },
    {
      href: "https://www.national-lottery.co.uk",
      icon: "NationalLottery",
      label: "The National Lottery",
    },
    {
      href: "https://www.nhs.uk",
      icon: "Nhs",
      label: "NHS",
    },
    {
      href: "https://www.ogilvy.com",
      icon: "Ogilvy",
      label: "Ogilvy",
    },
    {
      href: "http://www.social360monitoring.com",
      icon: "Social360",
      label: "Social 360",
    },
    {
      href: "https://www.stordis.com",
      icon: "Stordis",
      label: "Stordis",
    },
    {
      href: "http://wearesuburb.com",
      icon: "Suburb",
      label: "Suburb",
    },
    {
      href: "https://www.thomsonreuters.com",
      icon: "ThomsonReuters",
      label: "Thomson Reuters",
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
/* eslint-enable */
