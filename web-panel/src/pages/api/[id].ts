import type { NextApiRequest, NextApiResponse } from "next"

export default (req: NextApiRequest, res: NextApiResponse<any>) => {
	res.status(200).json([
		{
			comment: "First",
			id: req.query.id,
		},
		{
			comment: "Nice post",
		},
	])
}
