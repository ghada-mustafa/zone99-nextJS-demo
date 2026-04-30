import { Service } from "../types";
import services from "./services.json";

export function getAllServices(): Service[] {
    return services;
}

export function getServiceBySlug(slug: string): Service | undefined {
    return services.find(service => service.slug === slug);
}