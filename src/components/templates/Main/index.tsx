import React, { ReactElement } from "react";

type TProps = {
  header?: ReactElement;
  nav?: ReactElement;
  content?: ReactElement;
};

const MainTemplate: React.FC<TProps> = ({ header, nav, content }) => {
  return (
    <div>
      <header>{header}</header>
      <nav>{nav}</nav>
      <main>{content}</main>
    </div>
  );
};

export default MainTemplate;
