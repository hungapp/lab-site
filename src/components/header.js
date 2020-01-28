import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

const HeaderContainer = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`

const LogoContainer = styled(Link)`
  padding: 5px;
  // @media screen and (max-width: 800px) {
  //   width: 50px;
  //   padding: 0;
  // }
`

const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`

const OptionLink = styled(Link)`
  padding: 5px 15px;
  cursor: pointer;
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query MenuQuery {
      allWordpressWpApiMenusMenusItems {
        edges {
          node {
            name
            id
            items {
              title
              object_slug
              object_id
            }
          }
        }
      }
    }
  `)
  const menuItems = data.allWordpressWpApiMenusMenusItems.edges[0].node.items

  return (
    <HeaderContainer>
      <LogoContainer to="/">ABC</LogoContainer>
      <OptionsContainer>
        {menuItems.map(item => (
          <OptionLink key={item.object_id} to={item.object_slug}>
            {item.title}
          </OptionLink>
        ))}
      </OptionsContainer>
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
