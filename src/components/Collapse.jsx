import { useState } from "react";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`collapse ${isOpen ? "collapse--open" : ""}`}>
      <button
        type="button"
        className="collapse__header"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
      >
        <span className="collapse__title">{title}</span>
        <svg
          className="collapse__arrow"
          viewBox="0 0 24 24"
          focusable="false"
          aria-hidden="true"
        >
          <path
            d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"
            fill="currentColor"
          />
        </svg>
      </button>

      <div className="collapse__panel" aria-hidden={!isOpen}>
        <div className="collapse__content">{content}</div>
      </div>
    </div>
  );
}

export default Collapse;
