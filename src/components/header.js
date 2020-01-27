import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

const HeaderContainer = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

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

const Header = ({ siteTitle, pageLinks }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <h1 style={{ margin: 0, padding: 0 }}>{siteTitle} </h1>
    </LogoContainer>
    <OptionsContainer>
      {pageLinks.map(({ node }) => (
        <OptionLink key={node.id} to={node.slug}>
          {node.title}
        </OptionLink>
      ))}
    </OptionsContainer>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
