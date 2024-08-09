import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Item One</MenuItem>
        <MenuItem>Item Two</MenuItem>
        <MenuItem>Item Three</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
