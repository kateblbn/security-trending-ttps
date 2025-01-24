import logo from "./images/Telenor.png";

export default function HeaderLogo() {
  return (
    <div className=" container">
      <div className="">
        <div className="logo">
          <img className="logo_img" src={logo} alt="telenor" />
        </div>
        <div className="logo_title">
          <h1 className="">Telenor</h1>
        </div>
      </div>
    </div>
  );
}
