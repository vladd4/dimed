import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ServiceList from "@/components/ServiceList/ServiceList";

export default function Services() {
  return (
    <main className="main">
      <Header />
      <BreadCrumbs link_href="/services" link_label="Послуги" />
      <ServiceList />
      <Footer />
    </main>
  );
}
