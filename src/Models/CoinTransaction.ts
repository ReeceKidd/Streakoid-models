import CoinSources from '../Types/CoinSources';
import CoinTransactionTypes from '../Types/CoinTransactionTypes';

export interface CoinTransaction {
    _id: string;
    transactionType: CoinTransactionTypes;
    source: CoinSources;
    userId: string;
    xp: number;
    createdAt: string;
    updatedAt: string;
}
