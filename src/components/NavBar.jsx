import React from 'react'
import Settings from './Settings'
import PokemonSearch from './PokemonSearch'
import { StyledNavContainer } from '../Style/StyledNavBar'
import Pages from './Pages'

const NavBar = ({toggle, isDark}) => {
  return (
    <StyledNavContainer>
        <Pages />
        <PokemonSearch />
        <Settings toggle={toggle} isDark={isDark} />
    </StyledNavContainer>
  )
}

export default NavBar