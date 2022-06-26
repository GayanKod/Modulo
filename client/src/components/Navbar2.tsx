import LogoModulo from "../assets/img/LogoModuloLight.png";
import { isAuth } from "../helpers/auth";

export default function Navbar2() {
  return (
    <div className="nav">
      <div>
        <a href="/">
          <img src={LogoModulo} alt="logo" height={"50px"} />
        </a>
      </div>

      <div>
        <h2>Hi! Welcome to {/* {isAuth().institutes[0].} */}institutename</h2>
      </div>

      <div>
        <i className="fas fa-solid fa-user"></i>
      </div>
    </div>
  );
}
