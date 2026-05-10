import type { Classes } from "./classes";

export interface Section {
    id: number;
    class_id: number;
    name: string;

    classes?: Classes;
}
