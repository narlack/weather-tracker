import React from 'react';
import './Layout.css';

function Layout(props: React.PropsWithChildren) {
  return <main className="layout">{props.children}</main>;
}

export default Layout;
