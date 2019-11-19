import React from "react"

import Layout from "../components/layout"

const Resources = () => {
  return (
    <Layout>
      <h1>Welcome to the Resource Page</h1>
      <br />
      <h3 className="Link">
        Where to find free audiobooks online (11 sites):
        <a
          style={{ color: "black" }}
          href="https://bookriot.com/2016/09/15/11-websites-find-free-audiobooks-online/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <br />
          https://bookriot.com/2016/09/15/11-websites-find-free-audiobooks-online/
        </a>
      </h3>
      <br />
      <h3 className="Link">
        Millions of books are in the Public Domain:
        <a
          style={{ color: "black" }}
          href="https://www.vice.com/en_us/article/kz4e3e/millions-of-books-are-secretly-in-the-public-domain-you-can-download-them-free"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <br />
          https://www.vice.com/en_us/article/kz4e3e/millions-of-books-are-secretly-in-the-public-domain-you-can-download-them-free
        </a>
      </h3>
      <br />
      <h3 className="Link">
        Where to go for Public Domain Books:
        <a
          style={{ color: "black" }}
          href="https://www.lifewire.com/find-public-domain-books-online-3481751"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <br />
          https://www.lifewire.com/find-public-domain-books-online-3481751
        </a>
      </h3>
      <br />
      <h3 className="Link">
        Top 100 books on Project Gutenberg
        <a
          style={{ color: "black" }}
          href="https://www.gutenberg.org/browse/scores/top"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <br />
          https://www.gutenberg.org/browse/scores/top
        </a>
      </h3>
      <br />
      <h3 className="Link">
        An Archive of Public Domain Books
        <a
          style={{ color: "black" }}
          href="https://onlinebooks.library.upenn.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <br />
          https://onlinebooks.library.upenn.edu/
        </a>
      </h3>
      <br />
      <h3 className="Link">
        Highlights from the Public Domain Release in 2019
        <a
          style={{ color: "black" }}
          href="https://bookriot.com/2019/01/03/public-domain-books-2019/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <br />
          https://bookriot.com/2019/01/03/public-domain-books-2019/
        </a>
      </h3>
      <br />
    </Layout>
  )
}

export default Resources
