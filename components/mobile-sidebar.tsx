import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Sidebar } from "@/components/sidebar";

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="pr-4 md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="w-32 p-0 pt-10 bg-secondary">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
