import OidXpTransactionTypes from '../Types/OidXpTransactionTypes';
import { OidXpSources } from './OidXpSources';

export interface OidXpTransaction {
    _id: string;
    transactionType: OidXpTransactionTypes;
    source: OidXpSources;
    userId: string;
    oidXp: number;
    createdAt: string;
    updatedAt: string;
}
