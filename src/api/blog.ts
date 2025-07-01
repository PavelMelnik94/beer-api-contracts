// Auto-generated API endpoint types for blog
import type { BlogPostType } from '../types/blog-post-zod-blogpost';
import type { CreateBlogPostType } from '../types/blog-post-zod-createblogpost';
import type { UpdateBlogPostType } from '../types/blog-post-zod-updateblogpost';
import type { GetBlogPostsType } from '../types/blog-post-zod-getblogposts';
import type { AuthorType } from '../types/blog-post-zod-author';
import type { BlogTagType } from '../types/blog-post-zod-blogtag';
import type { BlogPostSummaryType } from '../types/blog-post-zod-blogpostsummary';
import type { BlogPostResponseType } from '../types/blog-post-zod-blogpostresponse';
import type { PaginatedBlogPostsType } from '../types/blog-post-zod-paginatedblogposts';
import type { BlogTagResponseType } from '../types/blog-misc-zod-blogtagresponse';
import type { BlogLikeResponseType } from '../types/blog-misc-zod-bloglikeresponse';
import type { LikeToggleResponseType } from '../types/blog-misc-zod-liketoggleresponse';
import type { CreateBlogCommentType } from '../types/blog-comment-zod-createblogcomment';
import type { UpdateBlogCommentType } from '../types/blog-comment-zod-updateblogcomment';
import type { GetBlogCommentsType } from '../types/blog-comment-zod-getblogcomments';
import type { BlogCommentResponseType } from '../types/blog-comment-zod-blogcommentresponse';
import type { PaginatedBlogCommentsType } from '../types/blog-comment-zod-paginatedblogcomments';

export interface BlogApiEndpoints {
  getById: { params: { id: string }; response: BlogPostType };
  create: { body: CreateBlogCommentType; response: BlogPostResponseType };
  update: { body: UpdateBlogCommentType; params: { id: string }; response: BlogPostResponseType };
  getGetBlogPosts: { query: GetBlogPostsType; response: BlogPostResponseType };
  getAuthorById: { params: { id: string }; response: AuthorType };
  getBlogTagById: { params: { id: string }; response: BlogTagType };
  getBlogPostSummaryById: { params: { id: string }; response: BlogPostSummaryType };
  getPaginatedBlogPostsById: { params: { id: string }; response: PaginatedBlogPostsType };
  getGetBlogComments: { query: GetBlogCommentsType; response: BlogPostResponseType };
  getPaginatedBlogCommentsById: { params: { id: string }; response: PaginatedBlogCommentsType };
  delete: { params: { id: string }; response: void };
}

// Generic API client type for blog
export type BlogApiClient = {
  [K in keyof BlogApiEndpoints]: (
    data: BlogApiEndpoints[K] extends { body: infer B; params: infer P }
      ? { body: B; params: P }
      : BlogApiEndpoints[K] extends { body: infer B }
      ? { body: B }
      : BlogApiEndpoints[K] extends { query: infer Q }
      ? { query: Q }
      : BlogApiEndpoints[K] extends { params: infer P }
      ? { params: P }
      : never
  ) => Promise<BlogApiEndpoints[K] extends { response: infer R } ? R : void>;
};
