// Auto-generated utility types for AddressSnapshot
import type { AddressSnapshotType } from '../types/order-addresssnapshot';

// Create request type (omit id, createdAt, updatedAt)
export type CreateAddressSnapshotRequest = Omit<AddressSnapshotType, 'id' | 'createdAt' | 'updatedAt'>;

// Update request type (partial of create request)
export type UpdateAddressSnapshotRequest = Partial<CreateAddressSnapshotRequest>;

// Response type (same as base type)
export type AddressSnapshotResponse = AddressSnapshotType;

// List response type
export type AddressSnapshotListResponse = AddressSnapshotType[];

// ID type for references
export type AddressSnapshotId = string;

// Partial type for patches
export type PartialAddressSnapshot = Partial<AddressSnapshotType>;
