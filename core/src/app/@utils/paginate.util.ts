import { FindManyOptions } from "typeorm"

//! Paginate
export function paginate(options: any, payload: any) {
	const page = Number(options.page) ? Number(options.page) : 1
	const take = Number(options.take) ? Number(options.take) : 10
	const skip = page === 1 ? 0 : (page - 1) * take

	const data = {
		success: true,
		message: `Get Data Success`,
		take: options.take ? Number(options.take) : 10,
		skip,
		page,
		total: payload[1],
		data: payload[0],
	}
	return data
}

//! PaginateAll
export function paginateAll(payload: any[]) {
	const data = {
		success: true,
		message: `Get Data Success`,
		take: "all",
		skip: false,
		page: false,
		total: payload.length,
		data: payload,
	}

	return data
}

//! PaginationOptions
export function paginationOptions(options: any): FindManyOptions {
	const page = Number(options.page) ? Number(options.page) : 1
	const take = Number(options.take) ? Number(options.take) : 10
	const skip = page === 1 ? 0 : (page - 1) * take

	const data: FindManyOptions = {
		take,
		skip,
	}

	return data
}
