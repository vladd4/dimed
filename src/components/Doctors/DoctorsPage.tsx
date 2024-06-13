import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import DoctorsList from "./DoctorsList";

export default function DoctorsPage() {
  return (
    <>
      <BreadCrumbs link_href="/doctors" link_label="Лікарі" />
      <DoctorsList />
    </>
  );
}
