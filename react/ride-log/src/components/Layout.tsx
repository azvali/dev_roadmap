type LayoutProps = { title: string; children: React.ReactNode };

export default function Layout(_props: LayoutProps) {
  // TODO: header with the title, then <main> with children
  return (
    <>
      <h1>{_props.title}</h1>
      <main>{_props.children}</main>
    </>
  );
}
