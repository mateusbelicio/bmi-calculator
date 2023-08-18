import Icon from './Icon';

function TipItem({ icon, title, children }) {
  return (
    <li className="flex flex-col gap-8 sm:flex-row lg:flex-col lg:items-start lg:gap-11 sm:gap-10 sm:items-center">
      <Icon className="w-16 h-16 shrink-0" rounded={true} name={icon} />
      <div className="text-flow">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="max-w-prose">{children}</p>
      </div>
    </li>
  );
}

export default TipItem;
