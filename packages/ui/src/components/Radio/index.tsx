type RadioProps = {
  className?: string;
};

const Radio = (props: RadioProps) => {
  const { className } = props;
  return <div className={className}>Radio</div>;
};

export { Radio };
