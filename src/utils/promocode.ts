// Auto-generated utility types for PromoCode
import type { PromoCodeType } from '../types/zod-schemas-promocode';

// Create request type (omit id, createdAt, updatedAt)
export type CreatePromoCodeRequest = Omit<
  PromoCodeType,
  'id' | 'createdAt' | 'updatedAt'
>;

// Update request type (partial of create request)
export type UpdatePromoCodeRequest = Partial<CreatePromoCodeRequest>;

// Response type (same as base type)
export type PromoCodeResponse = PromoCodeType;

// List response type
export type PromoCodeListResponse = PromoCodeType[];

// ID type for references
export type PromoCodeId = string;

// Partial type for patches
export type PartialPromoCode = Partial<PromoCodeType>;
