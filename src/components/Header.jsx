import * as React from "react";

import NewHeader from "./NewHeader";
import NewMobileHeader from "./NewMobileHeader";

const Header = () => {
  ////////////////////////////////////////return////////////////////////////////
  return (
    <>
      <NewHeader />
      {/* <MobileHeader /> */}
      <NewMobileHeader/>
    </>
  );
};
export default Header;
