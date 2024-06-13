import AlertForm from "@/components/AlertForm/AlertForm";
import DoctorsPage from "@/components/Doctors/DoctorsPage";
import Footer from "@/components/Footer/Footer";
import Hamburger from "@/components/Header/Hamburger";
import Header from "@/components/Header/Header";

export default function Doctors() {
  return (
    <main className="main">
      <Header />
      <Hamburger />
      <DoctorsPage />
      <Footer />
      <AlertForm />
    </main>
  );
}
