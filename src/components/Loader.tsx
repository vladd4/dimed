import Logo from "@/../public/logo_welcome 1.svg";
import Image from "next/image";

export default function Loader() {
  return (
    <div className="loader">
      <Image alt="Dimed" src={Logo} width={238} height={51} />
    </div>
  );
}
