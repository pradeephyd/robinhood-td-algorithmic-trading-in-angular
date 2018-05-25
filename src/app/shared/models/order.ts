import { Holding } from './holding.interface';

export interface Order {
    holding: Holding;
    quantity: number;
    price: number;
    submitted: boolean;
    pending: boolean;
    side: string;
}