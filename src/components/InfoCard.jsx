import Icon from './Icon';

function InfoCard({ icon, title, children }) {
  return (
    <div className={`p-6 rounded-2xl shadow bg-white shadow-primary-100/25 flex flex-col gap-4`}>
      <header className="flex items-center gap-4">
        <Icon name={icon} className="w-8 h-8" />
        <h3 className="text-md font-semibold">{title}</h3>
      </header>
      <p className="text-neutral-400">{children}</p>
    </div>
  );
}

export default InfoCard;
