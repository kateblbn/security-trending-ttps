import { ReactNode } from "react";
import "./Header.css";

type HeaderProps = {
  title: string;
  //consider making optional
  children?: ReactNode;
};

export default function Header(props: HeaderProps) {
  return (
    <div className="Header">
      <img src="images/telenorLogo.png" id="telenorLogo" />

      <h1 className="title">{props.title}</h1>

      {props.children}
    </div>
  );
}
