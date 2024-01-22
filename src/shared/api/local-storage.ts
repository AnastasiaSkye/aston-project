export const LSApi = {
	saveToken(token: string): void {
		localStorage.setItem('userToken', token);
	},
	readToken(): string | null {
		const token = localStorage.getItem('userToken');
		return token ? token : null;
	}
};