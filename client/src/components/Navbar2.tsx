import LogoModulo from "../assets/img/LogoModuloLight.png";

export default function Navbar2() {
  return (
    <div className="nav">
      <h2 className="logo">
        <a href="/">
          <img src={LogoModulo} alt="logo" height={"50px"} />
        </a>
      </h2>
      <h3 className="user">
        <a href="#">user </a>
        <i className="fas fa-solid fa-user"></i>
      </h3>
    </div>
  );
}
