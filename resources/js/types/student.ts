export interface Student {
    id: number;
    name: string;
    email: string;
    created_at: string;

    class: {
        name: string;
    };

    section: {
        name: string;
    };
}
