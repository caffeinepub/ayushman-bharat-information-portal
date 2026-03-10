import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { useState } from "react";

interface HospitalSearchBarProps {
  onSearch: (searchTerm: string, specialty: string) => void;
}

const specialties = [
  "All Specialties",
  "Cardiology",
  "Orthopedics",
  "Neurology",
  "Oncology",
  "General Surgery",
  "Pediatrics",
  "Gynecology",
  "ENT",
  "Ophthalmology",
];

export default function HospitalSearchBar({
  onSearch,
}: HospitalSearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [specialty, setSpecialty] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm, specialty === "All Specialties" ? "" : specialty);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 space-y-4">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex-1">
          <Input
            type="text"
            placeholder="Search by hospital name or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-12 text-base"
          />
        </div>
        <Select value={specialty} onValueChange={setSpecialty}>
          <SelectTrigger className="h-12 w-full md:w-[240px]">
            <SelectValue placeholder="Select Specialty" />
          </SelectTrigger>
          <SelectContent>
            {specialties.map((spec) => (
              <SelectItem key={spec} value={spec}>
                {spec}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          type="submit"
          size="lg"
          className="h-12 bg-govt-green hover:bg-govt-green/90"
        >
          <Search className="mr-2 h-5 w-5" />
          Search
        </Button>
      </div>
    </form>
  );
}
