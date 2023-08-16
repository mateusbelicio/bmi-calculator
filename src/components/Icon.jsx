import icons from '../assets/icons.svg';
import iconsCircle from '../assets/iconsCircle.svg';

function Icon({ name, rounded = false, ...rest }) {
  return (
    <svg {...rest}>
      <use xlinkHref={`${rounded ? iconsCircle : icons}#icon-${name}`} />
    </svg>
  );
}

export default Icon;
