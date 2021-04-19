export function formatDate(publishDate: string): string {
	return new Date(publishDate).toLocaleDateString("en-GB", {
		year: "numeric",
		month: "long",
		day: "numeric"
	});
}
