import ApartmentsList from "@/components/Apartments/ApartmentsList/ApartmentsList";
import DashboardHeader from "@/components/DashboardLayout/DashbaordHeader";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { useMemo } from "react";
import AddApartment from "@/components/Apartments/AddApartment/AddApartment";

const ApartmentsPage = () => {
  // Apartments Mock Data (12 items for pagination demo)
  const apartmentsData = useMemo(() => [
    { id: 1, flat: "101", type: "2BHK", floor: 1, tenant: "Ankit Varma", rent: "₹30,000", status: "Occupied" },
    { id: 2, flat: "102", type: "3BHK", floor: 2, tenant: "Neha Singh", rent: "₹30,000", status: "Occupied" },
    { id: 3, flat: "103", type: "2BHK", floor: 1, tenant: "-", rent: "₹20,000", status: "Vacant" },
    { id: 4, flat: "104", type: "1BHK", floor: 1, tenant: "Amit Sharma", rent: "₹15,000", status: "Occupied" },
    { id: 5, flat: "201", type: "3BHK", floor: 2, tenant: "-", rent: "₹28,000", status: "Vacant" },
    { id: 6, flat: "202", type: "2BHK", floor: 2, tenant: "Rahul Gupta", rent: "₹22,000", status: "Occupied" },
    { id: 7, flat: "203", type: "2BHK", floor: 2, tenant: "Pooja Patel", rent: "₹23,000", status: "Occupied" },
    { id: 8, flat: "301", type: "4BHK", floor: 3, tenant: "-", rent: "₹45,000", status: "Vacant" },
    { id: 9, flat: "302", type: "3BHK", floor: 3, tenant: "Suresh Kumar", rent: "₹35,000", status: "Occupied" },
    { id: 10, flat: "303", type: "2BHK", floor: 3, tenant: "Preeti Singh", rent: "₹24,000", status: "Occupied" },
    { id: 11, flat: "401", type: "1BHK", floor: 4, tenant: "-", rent: "₹16,000", status: "Vacant" },
    { id: 12, flat: "402", type: "2BHK", floor: 4, tenant: "Vikram Malhotra", rent: "₹25,000", status: "Occupied" },
  ], [])


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


      <ApartmentsList
        data={apartmentsData}
      />
    </>
  );
};
export default ApartmentsPage;
