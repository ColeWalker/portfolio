import React from 'react'
import ProjectPage from '../components/projectpages/ProjectPage';
import { StaticQuery, graphql} from 'gatsby'


const SecondPage = () => (
<StaticQuery query={graphql`
    {
        image: file (relativePath:{eq:"ppp2.PNG"}) {
    relativePath
    childImageSharp{
          fluid(maxWidth: 1920){
        	...GatsbyImageSharpFluid
          }
    }
  }
      }
    ` } render ={(data) =>(
  <ProjectPage content={`Lorem ipsum
   dolor amet locavore skateboard activated charcoal mixtape sartorial la croix hashtag umami four loko franzen etsy.
   Pug food truck truffaut cred plaid lyft sustainable gastropub air plant. `}
    title={`this is a test title`} image={data.image} bgColor={'#5E5E5E'}/> )}>
   </StaticQuery>
)

export default SecondPage
