import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import kebabCase from "lodash/kebabCase"
import { rhythm } from "../utils/typography"
import MailchimpForm from "../components/MailchimpForm"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Priya Garg" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(0 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small style={{textTransform: 'uppercase', color: '#00688B'}}>{node.frontmatter.date} in </small>
              <small style={{textTransform: 'uppercase', color: '#00688B'}}>
              <Link to={`/tags/${kebabCase(node.frontmatter.tags)}/`}>
                #{node.frontmatter.tags}
              </Link>
              </small>
            </header>
            <section
            style={{
              marginTop: rhythm(2 / 4),
            }}>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
      <footer>
      <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
                <MailchimpForm />
        </footer>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`
