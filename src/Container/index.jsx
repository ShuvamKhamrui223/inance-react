const Container = ({ children, className }) => {
  return <div className={`px-4 md:px-[5%] ${className}`}>{children}</div>;
};

export default Container;
