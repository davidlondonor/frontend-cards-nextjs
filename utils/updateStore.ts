export default function updateStore({ state, payload }: any) {
	return {
		...state,
		[payload.formId]: { ...state[payload.formId], ...payload.data },
	};
}
