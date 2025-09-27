/**
   * Formats a date string into a human-readable format.
   * @param {string} dateStr - ISO date string.
   * @returns {string} Formatted date string.
   */
// Formats a date string to 'Month Day, Year' (e.g., September 21, 2025)
export function formatDate(dateString) {
	const date = new Date(dateString);

// Format the valid Date to a human-friendly string in "Month day, Year" form usin US English locale
	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}
 