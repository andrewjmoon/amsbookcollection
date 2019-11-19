import React from "react"
import { graphql } from "gatsby"
import Menu from "../components/Menu"
import { Container } from "@material-ui/core"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Grid from "@material-ui/core/Grid"

export const query = graphql`
  {
    allAirtable(filter: { table: { eq: "Collection2" } }) {
      nodes {
        recordId
        data {
          Id
          Books
          Published
          Author
          Link
        }
      }
    }
  }
`
const useStyles = makeStyles({
  bullet: {
    margin: "0 2px",

    transform: "scale(0.8)",
    minWidth: 800,
    backgroundColor: "salmon",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  title: {
    fontSize: 40,
    justify: "center",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  items: {
    fontSize: 25,
    color: "black",
  },
})

const Collection2 = ({ data }) => {
  const classes = useStyles()
  return (
    <Container maxWidth="xl">
      <Menu />
      <h1 className={classes.title}>Book List Page 2</h1>
      <>
        {data.allAirtable.nodes.map(node => (
          <Grid
            container
            spacing={0}
            directions="column"
            alignItems="center"
            justify="center"
          >
            <Grid item xs={10}>
              <Card className={classes.bullet}>
                <CardContent className={classes.title} key={node.recordId}>
                  Book: {node.data.Books}
                  <br />
                  Author: {node.data.Author}
                  <br />
                  <a
                    style={{ color: "black" }}
                    href={node.data.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>
                  <hr />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        ))}
      </>
    </Container>
  )
}

export default Collection2
