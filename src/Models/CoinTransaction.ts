import CoinTransactionTypes from '../Types/CoinTransactionTypes';
import { CoinCreditTypes } from './CoinCreditTypes';
import { CoinChargeTypes } from './CoinChargeTypes';

export interface CoinTransaction {
    _id: string;
    transactionType: CoinTransactionTypes;
    userId: string;
    coins: number;
    createdAt: string;
    updatedAt: string;
    coinCreditType?: CoinCreditTypes;
    coinChargeType?: CoinChargeTypes;
}
