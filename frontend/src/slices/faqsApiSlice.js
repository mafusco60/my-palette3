import { FAQs_URL } from '../constants.js';
import { apiSlice } from './apiSlice.js';

export const faqsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getFAQs: builder.query({
			query: () => ({
				url: FAQs_URL,
				// params: { keyword, pageNumber },
			}),
			keepUnusedDataFor: 5,
			providesTags: ['FAQs'],
		}),

		createFAQ: builder.mutation({
			query: () => ({
				url: `${FAQs_URL}`,
				method: 'POST',
			}),
			invalidatesTags: ['FAQ'],
		}),

		getFAQDetails: builder.query({
			query: (faqId) => ({
				url: `${FAQs_URL}/${faqId}`,
			}),
			keepUnusedDataFor: 5,
		}),

		updateFAQ: builder.mutation({
			query: (data) => ({
				url: `${FAQs_URL}/${data.faqId}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['FAQs'],
		}),

		deleteFAQ: builder.mutation({
			query: (faqId) => ({
				url: `${FAQs_URL}/${faqId}`,
				method: 'DELETE',
			}),
			providesTags: ['FAQ'],
		}),
	}),
});

export const {
	useGetFAQsQuery,
	useGetFAQDetailsQuery,
	useCreateFAQMutation,
	useUpdateFAQMutation,
	useDeleteFAQMutation,
} = faqsApiSlice;
