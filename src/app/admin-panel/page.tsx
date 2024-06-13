import AddDoctor from "@/components/AdminPanel/Doctors/AddDoctor";
import EditAlert from "@/components/AdminPanel/Doctors/EditAlert";

import DoctorsList from "@/components/Doctors/DoctorsList";

export default function AdminPanel() {
  return (
    <main className="main">
      <AddDoctor />
      <EditAlert />
      <DoctorsList isAdmin />
    </main>
  );
}
