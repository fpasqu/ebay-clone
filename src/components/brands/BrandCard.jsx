
function BrandCard({ name, logo, key }) {
  return (
    <div className="brand-card" key={key}>
      <div className="brand-circle">
        <img src={logo} alt={name} />
      </div>
      <span>{name}</span>
    </div>
  );
}

export default BrandCard