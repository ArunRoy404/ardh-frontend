import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const AddBuilding = () => {
    return (
        <div>
            <Button>
                <PlusCircle className="w-4 h-4" />
                Add New Buildings
            </Button>
        </div>
    );
};

export default AddBuilding;