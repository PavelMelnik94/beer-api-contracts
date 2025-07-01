// Auto-generated utility types for Payment
import type { PaymentType } from '../types/order-payment';

// Create request type (omit id, createdAt, updatedAt)
export type CreatePaymentRequest = Omit<PaymentType, 'id' | 'createdAt' | 'updatedAt'>;

// Update request type (partial of create request)
export type UpdatePaymentRequest = Partial<CreatePaymentRequest>;

// Response type (same as base type)
export type PaymentResponse = PaymentType;

// List response type
export type PaymentListResponse = PaymentType[];

// ID type for references
export type PaymentId = string;

// Partial type for patches
export type PartialPayment = Partial<PaymentType>;
