import { ChallengeMember } from './ChallengeMember';

export interface PopulatedChallenge {
    _id: string;
    databaseName: string;
    name: string;
    description: string;
    members: ChallengeMember[];
    numberOfMembers: number;
    createdAt: string;
    updatedAt: string;
    icon?: string;
    color?: string;
    numberOfMinutes?: number;
    whatsappGroupLink?: string;
    discordGroupLink?: string;
}
