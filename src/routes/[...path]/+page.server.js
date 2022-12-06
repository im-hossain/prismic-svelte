import createClient from '$lib/prismicio';
export async function load({ fetch, request }) {
	const client = createClient({ fetch, request });

	const data = await client.getByType('blog', {
		orderings: {
			field: 'document.first_publication_date',
			direction: 'desc'
		},
		pageSize: 5,
		page: 1
	});

	if (data) {
		return { data };
	}
}