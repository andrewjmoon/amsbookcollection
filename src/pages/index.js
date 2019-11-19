import React from "react"
import { Link } from "gatsby-theme-material-ui"
import { Container, Box, Typography } from "@material-ui/core"

import ProTip from "../components/pro-tip"
import Layout from "../components/layout"

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {`Built with love by the `}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {` team.`}
    </Typography>
  )
}

export default function App() {
  return (
    <Layout>
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to the AM's Book Collection App homepage:
          </Typography>
          <h1>
            <Link to="/About" color="secondary">
              About
            </Link>
          </h1>
          <br />
          <h1>
            <Link to="/Collection" color="secondary">
              First Book Collection
            </Link>
          </h1>
          <br />
          <h1>
            <Link to="/Collection2" color="secondary">
              Second Book Collection
            </Link>
          </h1>
          <br />
          <h1>
            <Link to="/Collection3" color="secondary">
              Third Book Collection
            </Link>
          </h1>
          <br />
          <h1>
            <Link to="/Audiobooks" color="secondary">
              Audiobooks Collection
            </Link>
          </h1>
          <br />
          <h1>
            <Link to="/Resources" color="secondary">
              Resources
            </Link>
          </h1>
          <ProTip />
        </Box>
      </Container>
    </Layout>
  )
}

/*
import React from "react"
import { Link } from "gatsby"
import Layout from "./components/layout"

const IndexPage = () => (
  <Layout>
    <h1>Welcome to this Astros site.</h1>
    <p>Check out stats from the Team.</p>
    <Link to="/Batters/">Go to the Batters Page</Link>
    <Link to="/Pitchers/">Go to the Pitchers Page</Link>
  </Layout>
)

export default IndexPage
*/
