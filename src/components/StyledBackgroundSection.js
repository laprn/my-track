import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ title, className }) => (
  <StaticQuery
    query={graphql`
    query {
        file(relativePath: {eq: "index-image.jpg"}) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.file.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: center;
  background-size: cover;
  position: relative;
  height: 300px;
`

export default StyledBackgroundSection