type ButtonProps = {
  className?: string;
};

const Button = (props: ButtonProps) => {
  const { className } = props;
  return <div className={className}>Button</div>;
};

export { Button };
