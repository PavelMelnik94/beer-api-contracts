// Auto-generated utility types for UserSnapshot
import type { UserSnapshotType } from '../types/order-usersnapshot';

// Create request type (omit id, createdAt, updatedAt)
export type CreateUserSnapshotRequest = Omit<UserSnapshotType, 'id' | 'createdAt' | 'updatedAt'>;

// Update request type (partial of create request)
export type UpdateUserSnapshotRequest = Partial<CreateUserSnapshotRequest>;

// Response type (same as base type)
export type UserSnapshotResponse = UserSnapshotType;

// List response type
export type UserSnapshotListResponse = UserSnapshotType[];

// ID type for references
export type UserSnapshotId = string;

// Partial type for patches
export type PartialUserSnapshot = Partial<UserSnapshotType>;
