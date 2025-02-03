import { ReactNode } from "react";
import "./Header.css";
import logo from "./images/telenorLogo.png";

type HeaderProps = {
  title: string;
  subTitle?: ReactNode;
  lowerRightCorner?: ReactNode;
  //consider making optional
  children?: ReactNode;
};

export default function Header(props: HeaderProps) {
  return (
    <div className="header-wrapper">
      <div className="Header">
        <img src="./images/telenorLogo.png" id="telenorLogo" />
        <h1 className="title">{props.title}</h1>
        <div className="subTitle">{props.subTitle}</div>

        {props.children}
      </div>
      <div className="lowerRightCorner">{props.lowerRightCorner}</div>
    </div>
  );
}
