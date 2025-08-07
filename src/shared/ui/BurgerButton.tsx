type BurgerProps = {
  onClick: () => void;
};

const BurgerButton: React.FC<BurgerProps> = ({ onClick }: BurgerProps) => {
  return (
    <button onClick={onClick} className={"burger-button visible-mobile"}>
      <span className="visually-hidden">Toggle Navigation</span>
      <span className="burger-button__line"></span>
      <span className="burger-button__line"></span>
      <span className="burger-button__line"></span>
    </button>
  );
};

export default BurgerButton;
