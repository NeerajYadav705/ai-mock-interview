import { Link } from "react-router-dom";

export const LogoContainer = () => {
  return (
    <Link to={"/"}>
      <img
        src="/assets/svg/logo.svg"
        alt=""
        className="w-8 h-8 object-contain"
      />
    </Link>
  );
};
