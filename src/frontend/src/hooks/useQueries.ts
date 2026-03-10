import type { Hospital } from "@/backend";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useGetInitialQuestion() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ["initialQuestion"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getInitialQuestion();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useFindHospitalsByLocation(location: string) {
  const { actor, isFetching } = useActor();

  return useQuery<Hospital[]>({
    queryKey: ["hospitals", "location", location],
    queryFn: async () => {
      if (!actor) return [];
      return actor.findHospitalsByLocation(location);
    },
    enabled: !!actor && !isFetching && !!location,
  });
}

export function useFindHospitalsBySpecialty(specialty: string) {
  const { actor, isFetching } = useActor();

  return useQuery<Hospital[]>({
    queryKey: ["hospitals", "specialty", specialty],
    queryFn: async () => {
      if (!actor) return [];
      return actor.findHospitalsBySpecialty(specialty);
    },
    enabled: !!actor && !isFetching && !!specialty,
  });
}

export function useFindHospitalByName(name: string) {
  const { actor, isFetching } = useActor();

  return useQuery<Hospital | null>({
    queryKey: ["hospital", "name", name],
    queryFn: async () => {
      if (!actor) return null;
      return actor.findHospitalByName(name);
    },
    enabled: !!actor && !isFetching && !!name,
  });
}

export function useAddHospital() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      name,
      location,
      specialty,
    }: { name: string; location: string; specialty: string }) => {
      if (!actor) throw new Error("Actor not initialized");
      return actor.addHospital(name, location, specialty);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hospitals"] });
    },
  });
}
