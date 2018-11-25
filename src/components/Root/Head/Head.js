import PropTypes from "prop-types";
import React from "react";

import "../../../assets/android-chrome-192x192.png";
import "../../../assets/android-chrome-512x512.png";
import "../../../assets/apple-touch-icon.png";
import "../../../assets/browserconfig.xml";
import "../../../assets/favicon.ico";
import "../../../assets/favicon-16x16.png";
import "../../../assets/favicon-32x32.png";
import "../../../assets/manifest.webmanifest";
import "../../../assets/mstile-150x150.png";
import "../../../assets/safari-pinned-tab.svg";
import { variables } from "../../../system";
import { version } from "../../../../package.json";

const themeColor = variables["brand-primary-color"];

const Head = ({ meta }) => {
  return (
    <head>
      <meta charSet="utf-8" />
      {meta}
      <meta name="msapplication-TileColor" content={themeColor} />
      <meta name="theme-color" content={themeColor} />
      <meta name="viewport" content="width=device-width" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color={themeColor} />
      <link
        as="font"
        crossOrigin="anonymous"
        href="/assets/37BCE3_2_0.woff2"
        rel="preload"
        type="font/woff2"
      />
      <link
        as="font"
        crossOrigin="anonymous"
        href="/assets/37BCE3_3_0.woff2"
        rel="preload"
        type="font/woff2"
      />
      <link
        as="font"
        crossOrigin="anonymous"
        href="/assets/37BCE3_5_0.woff2"
        rel="preload"
        type="font/woff2"
      />
      <link rel="stylesheet" href={`/styles.css?v=${version}`} />
    </head>
  );
};

Head.propTypes = { meta: PropTypes.array };

export default Head;
