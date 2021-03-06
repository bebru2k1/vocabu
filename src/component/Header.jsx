import React from 'react';
import {
  chakra,
  Box,
  Image,
  useColorMode,
  Button,
  Badge,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import logolight from '../booklight.gif';
import logodark from '../bookdark.gif';
import { Link } from 'react-router-dom';
function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const logo = colorMode === 'light' ? logolight : logodark;
  return (
    <chakra.header d="flex" justifyContent="space-between" alignItems="center">
      <Box w={100} as={Link} to="/">
        <Image src={logo}></Image>
      </Box>

      <ColorModeSwitcher
        justifySelf="flex-end"
        colorMode={colorMode}
        toggleColorMode={toggleColorMode}
      />
    </chakra.header>
  );
}

export default Header;
