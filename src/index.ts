// Auto-generated index file with organized structure
// This file provides a single entry point for all generated types

// ===========================================
// 📋 Base Types
// ===========================================
export type { UserResponseType } from './types/user-response-userresponse';
export type { UpdateProfileType } from './types/update-profile-updateprofile';
export type { ToggleFavoriteType } from './types/favorite-togglefavorite';
export type { FavoriteType } from './types/favorite-favorite';
export type { CreateUserDtoType } from './types/create-user-createuser';
export type { UserAvatarType } from './types/avatar-useravatar';
export type { AddressResponseType } from './types/address-response-addressresponse';
export type { RateProductType } from './types/rating-rateproduct';
export type { ProductRatingType } from './types/rating-productrating';
export type { ProductType } from './types/product-product';
export type { CreateProductType } from './types/product-createproduct';
export type { UpdateProductType } from './types/product-updateproduct';
export type { ProductResponseType } from './types/product-productresponse';
export type { GetProductsType } from './types/get-products-getproducts';
export type { CategoryType } from './types/category-category';
export type { CreateCategoryType } from './types/category-createcategory';
export type { UpdateCategoryType } from './types/category-updatecategory';
export type { CategoryResponseType } from './types/category-categoryresponse';
export type { CartItemType } from './types/zod-schemas-cartitem';
export type { CartType } from './types/zod-schemas-cart';
export type { PromoCodeType } from './types/zod-schemas-promocode';
export type { UpdateCartItemType } from './types/update-cart-item-updatecartitem';
export type { AddToCartType } from './types/add-to-cart-adcart';
export type { BreweryType } from './types/brewery-brewery';
export type { CreateBreweryType } from './types/brewery-createbrewery';
export type { UpdateBreweryType } from './types/brewery-updatebrewery';
export type { BreweryResponseType } from './types/brewery-breweryresponse';
export type { RegisterType } from './types/register-register';
export type { LoginType } from './types/login-login';

// ===========================================
// 🔢 Enums and Constants
// ===========================================
export type { ProductSortFieldsType } from './enums/productsortfields';


// ===========================================
// ✅ Validation Rules
// ===========================================
export type { UserResponseValidationRules } from './validation/userresponse';
export type { UpdateProfileValidationRules } from './validation/updateprofile';
export type { ToggleFavoriteValidationRules } from './validation/togglefavorite';
export type { FavoriteValidationRules } from './validation/favorite';
export type { CreateUserDtoValidationRules } from './validation/createuserdto';
export type { UserAvatarValidationRules } from './validation/useravatar';
export type { AddressResponseValidationRules } from './validation/addressresponse';
export type { RateProductValidationRules } from './validation/rateproduct';
export type { ProductRatingValidationRules } from './validation/productrating';
export type { ProductValidationRules } from './validation/product';
export type { CreateProductValidationRules } from './validation/createproduct';
export type { UpdateProductValidationRules } from './validation/updateproduct';
export type { ProductResponseValidationRules } from './validation/productresponse';
export type { GetProductsValidationRules } from './validation/getproducts';
export type { CategoryValidationRules } from './validation/category';
export type { CreateCategoryValidationRules } from './validation/createcategory';
export type { UpdateCategoryValidationRules } from './validation/updatecategory';
export type { CategoryResponseValidationRules } from './validation/categoryresponse';
export type { CartItemValidationRules } from './validation/cartitem';
export type { CartValidationRules } from './validation/cart';
export type { PromoCodeValidationRules } from './validation/promocode';
export type { UpdateCartItemValidationRules } from './validation/updatecartitem';
export type { AddToCartValidationRules } from './validation/addtocart';
export type { BreweryValidationRules } from './validation/brewery';
export type { CreateBreweryValidationRules } from './validation/createbrewery';
export type { UpdateBreweryValidationRules } from './validation/updatebrewery';
export type { BreweryResponseValidationRules } from './validation/breweryresponse';
export type { RegisterValidationRules } from './validation/register';
export type { LoginValidationRules } from './validation/login';

// ===========================================
// ⚙️ Utility Types
// ===========================================
export type { CreateToggleFavoriteRequest } from './utils/togglefavorite';
export type { CreateFavoriteRequest } from './utils/favorite';
export type { CreateUserAvatarRequest } from './utils/useravatar';
export type { CreateRateProductRequest } from './utils/rateproduct';
export type { CreateProductRatingRequest } from './utils/productrating';
export type { CreateProductRequest } from './utils/product';
export type { CreateCategoryRequest } from './utils/category';
export type { CreateCartItemRequest } from './utils/cartitem';
export type { CreateCartRequest } from './utils/cart';
export type { CreatePromoCodeRequest } from './utils/promocode';
export type { CreateAddToCartRequest } from './utils/addtocart';
export type { CreateBreweryRequest } from './utils/brewery';
export type { CreateRegisterRequest } from './utils/register';
export type { CreateLoginRequest } from './utils/login';

// ===========================================
// 📡 API Endpoint Types
// ===========================================
export type { UsersApiEndpoints } from './api/users';
export type { ProductsApiEndpoints } from './api/products';
export type { CategoriesApiEndpoints } from './api/categories';
export type { CartApiEndpoints } from './api/cart';
export type { BreweriesApiEndpoints } from './api/breweries';
export type { AuthApiEndpoints } from './api/auth';

// ===========================================
// 🚀 Re-exports for convenience
// ===========================================
export * from './types';
export * from './enums';
export * from './validation';
export * from './utils';
export * from './api';
