import LogoModulo from "../assets/img/LogoModuloLight.png";
import { isAuth } from "../helpers/auth";

export default function Navbar2() {
  return (
    <div className="nav">
      <a href="/">
        <img src={LogoModulo} alt="logo" height={"50px"} />
      </a>
      <h2>Hi! Welcome to {/* {isAuth().institutes[0].} */}institutename</h2>
      <h3 className="user">
        <a href="#">user </a>
        <i className="fas fa-solid fa-user"></i>
      </h3>
    </div>
  );
}
