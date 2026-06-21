import ApartmentsList from "@/components/Apartments/ApartmentsList/ApartmentsList";
import DashboardHeader from "@/components/DashboardLayout/DashbaordHeader";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import AddApartment from "@/components/Apartments/AddApartment/AddApartment";

const ApartmentsPage = () => {
  return (
    <>
      {/* Header Block */}
      <DashboardHeader
        title="Apartments"
        showBreadcrumb
      >
        <div className="flex items-center justify-end gap-2">
          <Button variant="outline">
            <Upload />
            Bulk Upload
          </Button>
          <AddApartment />
        </div>
      </DashboardHeader>


      <ApartmentsList />
    </>
  );
};
export default ApartmentsPage;
