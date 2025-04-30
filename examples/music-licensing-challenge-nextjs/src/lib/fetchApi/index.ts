const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export const fetchApi = async (
	url: string,
	options?: RequestInit,
): Promise<Response> => {
	const absoluteUrl = url.startsWith("/") ? `${API_BASE_URL}${url}` : url;
	return fetch(absoluteUrl, options);
};
