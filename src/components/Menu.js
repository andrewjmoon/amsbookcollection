import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import { Link } from "gatsby"
import { Container } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1.4,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  title2: {
    flexGrow: 0,
  },
}))

export default function ButtonAppBar({ siteTitle }) {
  const classes = useStyles()

  return (
    <Container maxWidth="xl">
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            />
            <Typography variant="h6" className={classes.title}>
              <Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                Home
              </Link>
            </Typography>
            <Typography variant="h6" className={classes.root}>
              <Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                AM's Book Collection's App
              </Link>
            </Typography>

            <Typography variant="h6" className={classes.title2}>
              <Link
                to="/Resources"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                Resources
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </Container>
  )
}
