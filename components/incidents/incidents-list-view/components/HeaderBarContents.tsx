// lib
import * as React from "react";

// components
import { Block } from "baseui/block";

// styles
import {
  headerBarLeftWrapper,
  headerBarBackIcon,
  headerBarText,
  headerBar,
} from "../styles/navStyles";
import { signOutButton } from "../styles/listStyles";
import { signOut } from "next-auth/react";
import { Avatar } from "baseui/avatar";

interface Props {
  headerText: string; // text to render in the header
}

/**
 * React component to render the HeaderText on the top of the fixed navigation bar
 */
export const HeaderBarContents: React.FC<Props> = React.memo(
  ({ headerText }) => {
    return (
      <Block {...headerBar}>
        <Block {...headerBarLeftWrapper}>
          <Block {...headerBarBackIcon}>
            <Avatar name={"backButton"} src="/backArrow.png"></Avatar>
          </Block>
          <Block {...headerBarText} className="header">
            {headerText}
          </Block>
        </Block>
        <Block
          className="secondary-button"
          onClick={() => signOut()}
          {...signOutButton}
        >
          Sign Out
        </Block>
      </Block>
    );
  }
);
