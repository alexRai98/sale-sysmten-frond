import { ListItem } from "@material-ui/core";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Item = styled(ListItem)`
  &:hover {
    background-color: #2222;
  }
`;
const LinkTo = styled(Link)`
  color: #000000;
  text-decoration: none;
`;
export { Item, LinkTo };
