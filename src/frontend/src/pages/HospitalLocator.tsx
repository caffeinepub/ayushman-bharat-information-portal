import HospitalCard from "@/components/HospitalCard";
import HospitalSearchBar from "@/components/HospitalSearchBar";
import SEOHead from "@/components/SEOHead";
import { useHospitalSearch } from "@/hooks/useHospitalSearch";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export default function HospitalLocator() {
  const [searchTerm, setSearchTerm] = useState("");
  const [specialty, setSpecialty] = useState("");
  const { hospitals, isLoading, search } = useHospitalSearch();

  const handleSearch = (term: string, spec: string) => {
    setSearchTerm(term);
    setSpecialty(spec);
    search(term, spec);
  };

  return (
    <>
      <SEOHead
        title="Ayushman Hospital Locator | Find PM-JAY Empanelled Hospitals"
        description="Find PM-JAY empanelled hospitals near you. Search by location, specialty, or hospital name. Get cashless treatment at over 27,000+ hospitals across India."
        keywords="Ayushman hospitals, PM-JAY hospitals, empanelled hospitals, hospital locator, find hospitals"
      />
      <div className="bg-gradient-to-br from-saffron/10 to-govt-green/10 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <img
            src="/assets/generated/hospital-icon.dim_128x128.png"
            alt="Hospital Locator Icon"
            className="mx-auto mb-6 h-24 w-24"
          />
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Find Ayushman Empanelled Hospitals
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Search for PM-JAY empanelled hospitals by location, specialty, or
            name
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <HospitalSearchBar onSearch={handleSearch} />

          {isLoading && (
            <div
              className="flex flex-col items-center justify-center py-12"
              data-ocid="hospitals.loading_state"
            >
              <Loader2 className="mb-4 h-12 w-12 animate-spin text-saffron" />
              <p className="text-lg text-muted-foreground">
                Searching hospitals...
              </p>
            </div>
          )}

          {!isLoading &&
            hospitals.length === 0 &&
            (searchTerm || specialty) && (
              <div
                className="py-12 text-center"
                data-ocid="hospitals.empty_state"
              >
                <p className="text-lg text-muted-foreground">
                  No hospitals found. Try a different search term or specialty.
                </p>
              </div>
            )}

          {!isLoading &&
            hospitals.length === 0 &&
            !searchTerm &&
            !specialty && (
              <div
                className="py-12 text-center"
                data-ocid="hospitals.empty_state"
              >
                <p className="text-lg text-muted-foreground">
                  Enter a location, hospital name, or select a specialty to
                  search for empanelled hospitals.
                </p>
              </div>
            )}

          {!isLoading && hospitals.length > 0 && (
            <>
              <div className="mb-6 text-muted-foreground">
                Found {hospitals.length} hospital
                {hospitals.length !== 1 ? "s" : ""}
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {hospitals.map((hospital) => (
                  <HospitalCard
                    key={hospital.name + hospital.location}
                    hospital={hospital}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
