import s from './iconwrapper.module.css';

interface IIconWrapper {
  margin?: boolean;
  className?: string;
  icon: React.ReactNode;
}

const IconWrapper = ({ margin, icon, className }: IIconWrapper) => {
  return (
    <div className={`${margin ? 'lg:mt-24' : ''} ${s.default} ${className}`}>
      {icon}
    </div>
  );
};

export default IconWrapper;
