import { createSelector } from '@ngrx/store';
import { PostsState } from './posts.state';
import { createFeatureSelector } from '@ngrx/store';

export const POST_STATE_NAME = 'posts';
const getPostsState = createFeatureSelector<PostsState>(POST_STATE_NAME);

export const getPosts = createSelector(getPostsState, state => {
    return state.posts;
});

export const getPostById = createSelector(getPostsState, (state: any, prop: any) => {

    return state.posts.find((post: any) => post.id === prop.id);
})