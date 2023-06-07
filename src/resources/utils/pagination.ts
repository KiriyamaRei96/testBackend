export default async function pagination(model: any, req: any) {
  const page = req?.page || 1;
  const limit = req?.limit || 10;
  const skipCount = limit * page - limit;
  const totalCount = await model.count();
  const pageCount = Math.ceil(totalCount / limit);
  return {
    skipCount,
    paginationData: {
      page,
      limit,
      totalCount,
      pageCount,
      currentPage: page,
    },
  };
}
