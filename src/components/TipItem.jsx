import Icon from './Icon';

function TipItem({ icon, title, children }) {
  return (
    <li className="flex flex-col gap-8">
      <Icon className="w-16 h-16" rounded={true} name={icon} />
      <div className="text-flow">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p>{children}</p>
      </div>
    </li>
  );
}

export default TipItem;
