import CoinTransactionTypes from '../Types/CoinTransactionTypes';
import { CoinSources } from './CoinSources';

export interface CoinTransaction {
    _id: string;
    transactionType: CoinTransactionTypes;
    source: CoinSources;
    userId: string;
    coins: number;
    createdAt: string;
    updatedAt: string;
}
