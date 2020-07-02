import OidXpTransactionTypes from '../Types/OidXpTransactionTypes';
import { OidXpSources } from './OidXpSources';

export interface OidXpTransaction {
    _id: string;
    transactionType: OidXpTransactionTypes;
    source: OidXpSources;
    userId: string;
    xp: number;
    createdAt: string;
    updatedAt: string;
}
