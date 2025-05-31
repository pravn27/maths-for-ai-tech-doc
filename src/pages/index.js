import { Redirect } from "@docusaurus/router";

// make default landing page as docs
export default function Home() {
  return (
    <Redirect to="/maths-for-ai-tech-doc/docs/category/maths-documentations" />
  );
}
