import { ReactNode } from "react";
import "./Header.css";
import logo from "./images/telenorLogo.png";

type HeaderProps = {
  title: string;
  //consider making optional
  children?: ReactNode;
};

export default function Header(props: HeaderProps) {
  return (

      <div className="Header">
        {/* <img src="./images/telenorLogo.png" id="telenorLogo" /> */}
        <img src={logo} id="telenorLogo" />
        
        <h1 className="title">{props.title}</h1>

        {props.children}
      </div>
  );
}
