import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import Footer from "@/components/Footer/Footer";
import ServiceList from "@/components/ServiceList/ServiceList";

export default function Services() {
  return (
    <main className="main">
      <BreadCrumbs link_href="/services" link_label="Послуги" />
      <ServiceList />
      <Footer />
    </main>
  );
}
