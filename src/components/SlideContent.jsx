
function SlideContent({ imageSrc, textColor, title, description, buttonText, buttonTextColor }) {
  return (
    <div className="slide-content">
      <img src={imageSrc} alt={title} />
      <div className="slide-text">
        <h2 style={{ color: textColor }}>{title}</h2>
        <p style={{ color: textColor }}>{description}</p>
        <button style={{ backgroundColor: textColor, color: buttonTextColor }}>
          {buttonText}</button>
      </div>
    </div>
  );
}

export default SlideContent