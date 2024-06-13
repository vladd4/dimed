import Logo from "@/../public/logo-black.png";
import Image from "next/image";

export default function Loader() {
  return (
    <div className="loader">
      <Image alt="Dimed" src={Logo} width={238} height={51} />
    </div>
  );
}
