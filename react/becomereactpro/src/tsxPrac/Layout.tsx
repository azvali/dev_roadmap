import type { ReactNode } from "react";

type propTypes = { title: string; children: ReactNode };

function Layout({ title, children }: propTypes): ReactNode {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
}

export default Layout;
