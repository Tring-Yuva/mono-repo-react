type AvatarProps = {
  className?: string;
};

const Avatar = (props: AvatarProps) => {
  const { className } = props;
  return <div className={className}>Avatar</div>;
};

export { Avatar };
