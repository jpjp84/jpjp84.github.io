import React from "react"
import { PageProps, Link } from "gatsby"

import Frame from "../components/templates/SiteFrame"
import SEO from "../components/seo"

const SecondPage = (props: PageProps) => (
  <Frame>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2 ({props.path})</p>
    <Link to="/">Go back to the homepage</Link>
  </Frame>
)

export default SecondPage
