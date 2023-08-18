import logo from '../assets/logo.svg';

function Logo({ className }) {
  return (
    <a href="#" className={`block w-10 h-10 lg:w-16 lg:h-16 ${className}`}>
      <img src={logo} alt="Body Mass Index Calculator Logo" />
    </a>
  );
}

export default Logo;
