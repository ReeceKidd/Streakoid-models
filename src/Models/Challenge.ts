export interface Challenge {
    _id: string;
    databaseName: string;
    name: string;
    description: string;
    members: string[];
    numberOfMembers: number;
    createdAt: string;
    updatedAt: string;
    icon?: string;
    color?: string;
    numberOfMinutes?: number;
    whatsappGroupLink?: string;
    discordGroupLink?: string;
}
