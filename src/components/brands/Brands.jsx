import BrandCard from "./BrandCard";

function Brands({ brands, heading }) {
  return (
    <>
        <h2 className='brands-heading'>{heading}</h2>
        <div className="brand-grid">
            {brands.map((b, i) => (
                <BrandCard name={b.name} logo={b.logo} key={i}></BrandCard>
            ))}
        </div>
    </>
  )
}

export default Brands