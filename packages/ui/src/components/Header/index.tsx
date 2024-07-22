type HeaderProps = {
  className?: string;
};

const Header = (props: HeaderProps) => {
  const { className } = props;
  return <div className={className}>Header</div>;
};
export { Header };
