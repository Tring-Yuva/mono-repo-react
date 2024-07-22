type SelectProps = {
  className?: string;
};

const Select = (props: SelectProps) => {
  const { className } = props;
  return <div className={className}>Select</div>;
};
export { Select };
