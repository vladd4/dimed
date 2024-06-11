import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ServiceList from "@/components/ServiceList/ServiceList";

export default function Pricing() {
  return (
    <main className="main">
      <Header />
      <BreadCrumbs link_href="/pricing" link_label="Ціни" />
      <ServiceList isPricing />
      <Footer />
    </main>
  );
}
