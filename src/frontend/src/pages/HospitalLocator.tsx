import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Bed, MapPin, Phone, Search } from "lucide-react";
import { useState } from "react";

type Hospital = {
  name: string;
  city: string;
  address: string;
  phone: string;
  beds: number;
};

const hospitalsBySpecialty: Record<string, Hospital[]> = {
  Cardiology: [
    {
      name: "AIIMS New Delhi - Cardiology Centre",
      city: "Delhi",
      address: "Ansari Nagar, New Delhi - 110029",
      phone: "011-26588500",
      beds: 120,
    },
    {
      name: "Fortis Escorts Heart Institute",
      city: "Delhi",
      address: "Okhla Road, New Delhi - 110025",
      phone: "011-47135000",
      beds: 310,
    },
    {
      name: "Narayana Hrudayalaya",
      city: "Bengaluru",
      address: "258/A, Bommasandra, Bengaluru - 560099",
      phone: "080-71222222",
      beds: 1000,
    },
    {
      name: "Apollo Hospitals - Cardiology",
      city: "Chennai",
      address: "21 Greams Lane, Chennai - 600006",
      phone: "044-28290200",
      beds: 500,
    },
    {
      name: "Kokilaben Dhirubhai Ambani Hospital",
      city: "Mumbai",
      address: "Rao Saheb Achutrao Patwardhan Marg, Mumbai - 400053",
      phone: "022-30999999",
      beds: 750,
    },
  ],
  Orthopedics: [
    {
      name: "NIMHANS Orthopedic Centre",
      city: "Bengaluru",
      address: "Hosur Road, Bengaluru - 560029",
      phone: "080-46110007",
      beds: 80,
    },
    {
      name: "Sir Ganga Ram Hospital",
      city: "Delhi",
      address: "Rajinder Nagar, New Delhi - 110060",
      phone: "011-25750000",
      beds: 675,
    },
    {
      name: "Sancheti Hospital",
      city: "Pune",
      address: "16 Shivajinagar, Pune - 411005",
      phone: "020-67445000",
      beds: 250,
    },
    {
      name: "Manipal Hospital Orthopedics",
      city: "Bengaluru",
      address: "98 HAL Airport Road, Bengaluru - 560017",
      phone: "080-25023000",
      beds: 600,
    },
    {
      name: "Medanta - The Medicity",
      city: "Delhi",
      address: "CH Baktawar Singh Road, Gurugram - 122001",
      phone: "0124-4141414",
      beds: 1250,
    },
  ],
  Neurology: [
    {
      name: "NIMHANS",
      city: "Bengaluru",
      address: "Hosur Road, Bengaluru - 560029",
      phone: "080-46110007",
      beds: 750,
    },
    {
      name: "AIIMS Neurology Dept.",
      city: "Delhi",
      address: "Ansari Nagar, New Delhi - 110029",
      phone: "011-26588500",
      beds: 200,
    },
    {
      name: "Apollo Neuro Hospital",
      city: "Hyderabad",
      address: "Film Nagar, Jubilee Hills, Hyderabad - 500033",
      phone: "040-23607777",
      beds: 440,
    },
    {
      name: "Christian Medical College",
      city: "Vellore",
      address: "Ida Scudder Road, Vellore - 632004",
      phone: "0416-2281000",
      beds: 2700,
    },
    {
      name: "Bombay Hospital Neurology",
      city: "Mumbai",
      address: "12 Marine Lines, Mumbai - 400020",
      phone: "022-22067676",
      beds: 350,
    },
  ],
  Oncology: [
    {
      name: "Tata Memorial Hospital",
      city: "Mumbai",
      address: "Dr E Borges Road, Parel, Mumbai - 400012",
      phone: "022-24177000",
      beds: 629,
    },
    {
      name: "AIIMS Oncology Centre",
      city: "Delhi",
      address: "Ansari Nagar, New Delhi - 110029",
      phone: "011-26588500",
      beds: 150,
    },
    {
      name: "Adyar Cancer Institute",
      city: "Chennai",
      address: "East Canal Bank Road, Chennai - 600020",
      phone: "044-24910754",
      beds: 534,
    },
    {
      name: "Rajiv Gandhi Cancer Institute",
      city: "Delhi",
      address: "Sector 5, Rohini, New Delhi - 110085",
      phone: "011-47022222",
      beds: 330,
    },
    {
      name: "HCG Cancer Centre",
      city: "Bengaluru",
      address: "8 P Kalinga Rao Road, Bengaluru - 560027",
      phone: "080-40206000",
      beds: 400,
    },
  ],
  "General Surgery": [
    {
      name: "AIIMS General Surgery",
      city: "Delhi",
      address: "Ansari Nagar, New Delhi - 110029",
      phone: "011-26588500",
      beds: 300,
    },
    {
      name: "KEM Hospital",
      city: "Mumbai",
      address: "Acharya Donde Marg, Parel, Mumbai - 400012",
      phone: "022-24107000",
      beds: 1800,
    },
    {
      name: "Safdarjung Hospital",
      city: "Delhi",
      address: "Ansari Nagar West, New Delhi - 110029",
      phone: "011-26707444",
      beds: 1531,
    },
    {
      name: "Osmania General Hospital",
      city: "Hyderabad",
      address: "Afzalgunj, Hyderabad - 500012",
      phone: "040-24600199",
      beds: 1100,
    },
    {
      name: "Seth GS Medical College",
      city: "Mumbai",
      address: "Acharya Donde Marg, Parel, Mumbai - 400012",
      phone: "022-24138000",
      beds: 2100,
    },
  ],
  Pediatrics: [
    {
      name: "Kalawati Saran Children Hospital",
      city: "Delhi",
      address: "Bangla Sahib Marg, New Delhi - 110001",
      phone: "011-23368053",
      beds: 500,
    },
    {
      name: "B.J. Wadia Hospital for Children",
      city: "Mumbai",
      address: "Acharya Donde Marg, Parel, Mumbai - 400012",
      phone: "022-24107000",
      beds: 364,
    },
    {
      name: "Institute of Child Health",
      city: "Kolkata",
      address: "11 Dr Biresh Guha St, Kolkata - 700017",
      phone: "033-22272500",
      beds: 200,
    },
    {
      name: "Rainbow Children Hospital",
      city: "Hyderabad",
      address: "22 Road No 4, Banjara Hills, Hyderabad - 500034",
      phone: "040-44555555",
      beds: 280,
    },
    {
      name: "AIIMS Pediatrics Dept.",
      city: "Delhi",
      address: "Ansari Nagar, New Delhi - 110029",
      phone: "011-26588500",
      beds: 250,
    },
  ],
  Gynecology: [
    {
      name: "Lady Hardinge Medical College",
      city: "Delhi",
      address: "Shaheed Bhagat Singh Marg, New Delhi - 110001",
      phone: "011-23408301",
      beds: 1500,
    },
    {
      name: "KEMH - King Edward Memorial",
      city: "Mumbai",
      address: "Rao Saheb, Parel, Mumbai - 400012",
      phone: "022-24107000",
      beds: 1600,
    },
    {
      name: "JIPMER Gynecology",
      city: "Chennai",
      address: "Dhanvantari Nagar, Pondicherry - 605006",
      phone: "0413-2296000",
      beds: 450,
    },
    {
      name: "Fernandez Hospital",
      city: "Hyderabad",
      address: "4-1-1230, Bogulkunta, Hyderabad - 500001",
      phone: "040-66456645",
      beds: 250,
    },
    {
      name: "Bangur Institute",
      city: "Kolkata",
      address: "Shyamaprasad Mukherjee Rd, Kolkata - 700025",
      phone: "033-22237600",
      beds: 270,
    },
  ],
  ENT: [
    {
      name: "Maulana Azad Medical College ENT",
      city: "Delhi",
      address: "BSZ Marg, New Delhi - 110002",
      phone: "011-23234525",
      beds: 100,
    },
    {
      name: "Amrita Institute of Medical Sciences",
      city: "Kochi",
      address: "AIMS Ponekkara PO, Kochi - 682041",
      phone: "0484-2801234",
      beds: 1350,
    },
    {
      name: "PGIMER ENT Dept.",
      city: "Chandigarh",
      address: "Madhya Marg, Chandigarh - 160012",
      phone: "0172-2755555",
      beds: 150,
    },
    {
      name: "Bangalore ENT Hospital",
      city: "Bengaluru",
      address: "2nd Cross, Residency Road, Bengaluru - 560025",
      phone: "080-22212424",
      beds: 80,
    },
    {
      name: "Deccan Hospital ENT",
      city: "Hyderabad",
      address: "3-6-105 Himayatnagar, Hyderabad - 500029",
      phone: "040-23261234",
      beds: 90,
    },
  ],
  Ophthalmology: [
    {
      name: "Sankara Nethralaya",
      city: "Chennai",
      address: "18 College Road, Chennai - 600006",
      phone: "044-28271616",
      beds: 230,
    },
    {
      name: "Shroff Eye Centre",
      city: "Delhi",
      address: "A-9 Kailash Colony, New Delhi - 110048",
      phone: "011-49494000",
      beds: 100,
    },
    {
      name: "LV Prasad Eye Institute",
      city: "Hyderabad",
      address: "L V Prasad Marg, Banjara Hills, Hyderabad - 500034",
      phone: "040-30612345",
      beds: 400,
    },
    {
      name: "Aravind Eye Hospital",
      city: "Chennai",
      address: "1 Anna Nagar, Madurai - 625020",
      phone: "0452-4356100",
      beds: 1224,
    },
    {
      name: "Regional Institute of Ophthalmology",
      city: "Kolkata",
      address: "1 Kyd Street, Kolkata - 700016",
      phone: "033-22264360",
      beds: 200,
    },
  ],
};

const specialtyColors: Record<string, string> = {
  Cardiology: "border-red-500/30 bg-red-500/10 hover:bg-red-500/20",
  Orthopedics: "border-white/15 bg-card hover:bg-accent",
  Neurology: "border-purple-400/30 bg-purple-500/10 hover:bg-purple-500/20",
  Oncology: "border-pink-400/30 bg-pink-500/10 hover:bg-pink-500/20",
  "General Surgery":
    "border-green-400/30 bg-green-500/10 hover:bg-green-500/20",
  Pediatrics: "border-yellow-400/30 bg-yellow-500/10 hover:bg-yellow-500/20",
  Gynecology: "border-rose-400/30 bg-rose-500/10 hover:bg-rose-500/20",
  ENT: "border-teal-400/30 bg-teal-500/10 hover:bg-teal-500/20",
  Ophthalmology: "border-white/15 bg-card hover:bg-accent",
};

const cities = [
  "Delhi",
  "Mumbai",
  "Kolkata",
  "Chennai",
  "Bengaluru",
  "Hyderabad",
  "Lucknow",
  "Patna",
  "Jaipur",
  "Bhopal",
  "Pune",
  "Ahmedabad",
  "Chandigarh",
  "Kochi",
  "Vellore",
];

export default function HospitalLocator() {
  const [activeSpecialty, setActiveSpecialty] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState<string>("all");

  const specialties = Object.keys(hospitalsBySpecialty);

  const getFilteredHospitals = (): Hospital[] => {
    let hospitals: Hospital[] = [];

    if (activeSpecialty) {
      hospitals = hospitalsBySpecialty[activeSpecialty] || [];
    } else {
      hospitals = Object.values(hospitalsBySpecialty).flat();
    }

    if (selectedCity !== "all") {
      hospitals = hospitals.filter(
        (h) => h.city.toLowerCase() === selectedCity.toLowerCase(),
      );
    }

    if (searchTerm.trim()) {
      const lower = searchTerm.toLowerCase();
      hospitals = hospitals.filter(
        (h) =>
          h.name.toLowerCase().includes(lower) ||
          h.city.toLowerCase().includes(lower) ||
          h.address.toLowerCase().includes(lower),
      );
    }

    return hospitals;
  };

  const filteredHospitals = getFilteredHospitals();

  return (
    <>
      <SEOHead
        title="Ayushman Hospital Locator | Find PM-JAY Empanelled Hospitals"
        description="Find PM-JAY empanelled hospitals near you. Search by location, specialty, or hospital name. Get cashless treatment at over 27,000+ hospitals across India."
        keywords="Ayushman hospitals, PM-JAY hospitals, empanelled hospitals, hospital locator, find hospitals"
      />

      <div className="bg-gradient-to-br from-saffron/15 via-background to-govt-green/15 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Find Ayushman Empanelled Hospitals
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Search by city or specialty to find top PM-JAY empanelled hospitals
            near your location
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 md:py-14">
        <div className="mx-auto max-w-6xl">
          {/* Search by City */}
          <div className="mb-6">
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              Filter by City
            </h2>
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger
                className="w-full max-w-xs border-2 border-border bg-card text-foreground"
                data-ocid="hospitals.select"
              >
                <SelectValue placeholder="All Cities" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">🏙️ All Cities</SelectItem>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    📍 {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Specialty Pills */}
          <div className="mb-8">
            <h2 className="mb-4 text-lg font-semibold text-foreground">
              Select Specialty
            </h2>
            <div
              className="flex flex-wrap gap-2"
              data-ocid="hospitals.specialty.tab"
            >
              <button
                type="button"
                onClick={() => setActiveSpecialty(null)}
                className={`min-h-0 rounded-full border-2 px-4 py-1.5 text-sm font-semibold transition-all ${
                  activeSpecialty === null
                    ? "border-saffron bg-saffron text-white shadow-md"
                    : "border-border bg-card hover:border-saffron/50 hover:bg-saffron/10"
                }`}
              >
                All Specialties
              </button>
              {specialties.map((spec) => (
                <button
                  type="button"
                  key={spec}
                  onClick={() =>
                    setActiveSpecialty(activeSpecialty === spec ? null : spec)
                  }
                  className={`min-h-0 rounded-full border-2 px-4 py-1.5 text-sm font-semibold transition-all ${
                    activeSpecialty === spec
                      ? "border-saffron bg-saffron text-white shadow-md"
                      : `border-2 ${specialtyColors[spec]}`
                  }`}
                >
                  {spec}
                </button>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="mb-8 flex items-center gap-3 rounded-xl border-2 border-border bg-card px-4 shadow-sm focus-within:border-saffron/60">
            <Search className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by hospital name, city, or address..."
              className="border-0 bg-transparent shadow-none focus-visible:ring-0"
              data-ocid="hospitals.search_input"
            />
            {searchTerm && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSearchTerm("")}
                className="min-h-0 text-xs text-muted-foreground hover:text-foreground"
              >
                Clear
              </Button>
            )}
          </div>

          {/* Active Filters Summary */}
          {(activeSpecialty || selectedCity !== "all") && (
            <div className="mb-6 flex flex-wrap items-center gap-3 rounded-xl bg-gradient-to-r from-saffron/15 to-govt-green/10 px-5 py-3">
              <span className="text-sm text-muted-foreground">Showing:</span>
              {selectedCity !== "all" && (
                <Badge className="bg-saffron/20 text-saffron border-saffron/30">
                  📍 {selectedCity}
                </Badge>
              )}
              {activeSpecialty && (
                <Badge className="bg-govt-green/20 text-govt-green border-govt-green/30">
                  🏥 {activeSpecialty}
                </Badge>
              )}
              <Badge className="bg-card/10 text-white ml-auto">
                {filteredHospitals.length} hospital
                {filteredHospitals.length !== 1 ? "s" : ""}
              </Badge>
            </div>
          )}

          {/* Hospital Cards */}
          {filteredHospitals.length === 0 ? (
            <div
              className="py-16 text-center"
              data-ocid="hospitals.empty_state"
            >
              <p className="text-lg text-muted-foreground">
                No hospitals found. Try a different city, specialty, or search
                term.
              </p>
              <Button
                variant="outline"
                className="mt-4 border-saffron/40 text-saffron hover:bg-saffron/10"
                onClick={() => {
                  setSelectedCity("all");
                  setActiveSpecialty(null);
                  setSearchTerm("");
                }}
              >
                Clear All Filters
              </Button>
            </div>
          ) : (
            <>
              {!activeSpecialty && !searchTerm && selectedCity === "all" && (
                <p className="mb-4 text-sm text-muted-foreground">
                  Showing all {filteredHospitals.length} hospitals. Select a
                  city or specialty above to filter.
                </p>
              )}
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {filteredHospitals.map((hospital, i) => (
                  <Card
                    key={`${hospital.name}-${hospital.city}`}
                    className="border-2 border-saffron/20 bg-gradient-to-br from-card to-saffron/5 transition-shadow hover:border-saffron/50 hover:shadow-lg"
                    data-ocid={`hospitals.item.${i + 1}`}
                  >
                    <CardContent className="p-5">
                      <div className="mb-3 flex items-start justify-between gap-2">
                        <h3 className="font-display text-base font-bold leading-snug text-foreground">
                          {hospital.name}
                        </h3>
                        <Badge
                          variant="secondary"
                          className="flex-shrink-0 bg-govt-green/10 text-xs text-govt-green"
                        >
                          PM-JAY
                        </Badge>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2 text-muted-foreground">
                          <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-saffron" />
                          <div>
                            <span className="font-medium text-foreground">
                              {hospital.city}
                            </span>
                            <br />
                            <span className="text-xs">{hospital.address}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Phone className="h-4 w-4 flex-shrink-0 text-govt-green" />
                          <a
                            href={`tel:${hospital.phone}`}
                            className="font-medium text-govt-green hover:underline"
                          >
                            {hospital.phone}
                          </a>
                        </div>

                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Bed className="h-4 w-4 flex-shrink-0 text-foreground" />
                          <span className="text-xs">
                            <span className="font-semibold text-foreground">
                              {hospital.beds}
                            </span>{" "}
                            beds
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
