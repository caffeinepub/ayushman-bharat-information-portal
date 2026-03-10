import type { Hospital } from "@/backend";
import { useState } from "react";
import { useActor } from "./useActor";

export function useHospitalSearch() {
  const { actor } = useActor();
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const search = async (searchTerm: string, specialty: string) => {
    if (!actor) return;

    setIsLoading(true);
    try {
      let results: Hospital[] = [];

      if (specialty && searchTerm) {
        // Search by both specialty and location/name
        const specialtyResults =
          await actor.findHospitalsBySpecialty(specialty);
        results = specialtyResults.filter(
          (h) =>
            h.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            h.location.toLowerCase().includes(searchTerm.toLowerCase()),
        );
      } else if (specialty) {
        // Search by specialty only
        results = await actor.findHospitalsBySpecialty(specialty);
      } else if (searchTerm) {
        // Try to find by name first
        const byName = await actor.findHospitalByName(searchTerm);
        if (byName) {
          results = [byName];
        } else {
          // Otherwise search by location
          results = await actor.findHospitalsByLocation(searchTerm);
        }
      }

      setHospitals(results);
    } catch (error) {
      console.error("Error searching hospitals:", error);
      setHospitals([]);
    } finally {
      setIsLoading(false);
    }
  };

  return { hospitals, isLoading, search };
}
