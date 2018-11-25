import PropTypes from "prop-types";
import React from "react";

import "../../assets/.htaccess";
import "./Root.css";
import Head from "./Head";
import { version } from "../../../package.json";

const Root = ({ meta, router }) => {
  return (
    <html lang="en-gb">
      <Head meta={meta} />
      <body className="no-js">
        <script
          dangerouslySetInnerHTML={{ __html: `document.body.className = ""` }}
        />
        <div className="Root" id="router" dangerouslySetInnerHTML={router} />
        <script src={`/bundle.js?v=${version}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `var c = document.createElement("link");c.rel = "stylesheet";c.href = "//hello.myfonts.net/count/37bce3";var h = document.head;n = h.childNodes;h.insertBefore(c, n[n.length - 1 ].nextSibling);`,
          }}
        />
      </body>
    </html>
  );
};

Root.propTypes = {
  meta: PropTypes.array,
  router: PropTypes.array,
};

export default Root;
