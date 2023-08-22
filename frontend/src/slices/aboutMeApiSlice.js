import { ABOUT_ME_URL } from '../constants.js';
import { apiSlice } from './apiSlice.js';

export const aboutMeApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getAboutMe: builder.query({
			query: () => ({
				url: ABOUT_ME_URL,
			}),
			keepUnusedDataFor: 5,
			providesTags: ['AboutMe'],
		}),

		getSortedAboutMe: builder.query({
			query: () => ({
				url: `${ABOUT_ME_URL}/sort`,
			}),
			keepUnusedDataFor: 5,
			providesTags: ['AboutMe'],
		}),
		updateAboutMe: builder.mutation({
			query: (data) => ({
				url: `${ABOUT_ME_URL}/${data.aboutMeId}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['AboutMe'],
		}),
		createAboutMe: builder.mutation({
			query: (data) => ({
				url: `${ABOUT_ME_URL}/${data.aboutMeId}`,
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['AboutMe'],
		}),
		deleteAboutMe: builder.mutation({
			query: (aboutMeId) => ({
				url: `${ABOUT_ME_URL}/${aboutMeId}`,
				method: 'DELETE',
			}),
			providesTags: ['AboutMe'],
		}),
	}),
});

export const {
	useGetAboutMeQuery,
	useGetSortedAboutMeQuery,

	useUpdateAboutMeMutation,
	useDeleteAboutMeMutation,
	useCreateAboutMeMutation,
} = aboutMeApiSlice;
