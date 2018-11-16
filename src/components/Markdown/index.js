import Blockquote from "./components/Blockquote";
import Code from "./components/Code";
import Heading from "./components/Heading";
import List from "./components/List";
import Paragraph from "./components/Paragraph";
import Rule from "./components/Rule";
import Table from "./components/Table";

const components = {
  blockquote: Blockquote,
  code: Code.Block,
  h1: Heading.H1,
  h2: Heading.H2,
  h3: Heading.H3,
  h4: Heading.H4,
  h5: Heading.H5,
  h6: Heading.H6,
  hr: Rule,
  inlineCode: Code,
  ol: List.Ordered,
  p: Paragraph,
  table: Table,
  ul: List,
};

export { default } from "./Markdown";
export { components, Blockquote, Code, Heading, List, Paragraph, Rule, Table };
