import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Hospital {
    name: string;
    specialty: string;
    location: string;
}
export interface Question {
    text: string;
    nextQuestions: Array<Question>;
    options: Array<string>;
}
export interface backendInterface {
    addHospital(name: string, location: string, specialty: string): Promise<void>;
    findHospitalByName(name: string): Promise<Hospital | null>;
    findHospitalsByLocation(location: string): Promise<Array<Hospital>>;
    findHospitalsBySpecialty(specialty: string): Promise<Array<Hospital>>;
    getInitialQuestion(): Promise<Question>;
}
