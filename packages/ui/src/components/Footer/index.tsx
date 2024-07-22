type FooterProps = {
  className?: string;
};

const Footer = (props: FooterProps) => {
  const { className } = props;
  return <div className={className}>Footer</div>;
};

export { Footer };
