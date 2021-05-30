export function insertDataPlaceholder(payload: any) {
	const data = {
		message: `Insert Data Success`,
		success: true,
		data: payload,
	}

	return data
}

export function updateDataPlaceholder(payload: any) {
	const data = {
		message: `Update Data Success`,
		success: true,
		data: payload.length > 0 ? payload[0] : null,
	}

	return data
}

export function deleteDataPlaceholder(payload: any) {
	const data = {
		message: `Delete Data Success`,
		success: true,
		data: payload,
	}

	return data
}
