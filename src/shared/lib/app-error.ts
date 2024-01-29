export const AppError = (e: unknown): Error => {
	if (e instanceof Error) {
		return e;
	}
	return new Error('unknown_error');
};