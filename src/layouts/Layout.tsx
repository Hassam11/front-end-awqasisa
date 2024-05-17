interface LayoutMainProps {
  children: React.ReactNode;
}

export default function LayoutMain({ children }: LayoutMainProps) {
  return (
    <>
      <h2>Navigation</h2>
      <div>{children}</div>
    </>
  );
}
