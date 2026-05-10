import type { Classes } from "./classes";
import type { Section } from "./section";

export interface Student {
    id: number;
    name: string;
    email: string;

    class_id: number;
    section_id: number;

    class?: Classes;
    section?: Section;

    created_at: string;
}
