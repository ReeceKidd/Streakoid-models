import OidXpSources from '../Types/OidXpSources';
import OidXpTransactionTypes from '../Types/OidXpTransactionTypes';

export interface OidXpTransaction {
    _id: string;
    transactionType: OidXpTransactionTypes;
    source: OidXpSources;
    userId: string;
    xp: number;
    createdAt: string;
    updatedAt: string;
}
