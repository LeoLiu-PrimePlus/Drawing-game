import "./style.scss";

const Button = ({ label, handleClick, param, className, children }) => {
  return (
    <button
        type="button"
        className={className}
        onClick={() => handleClick(param)}
    >
        {children}{label}
    </button>
  )
};

export default Button;
