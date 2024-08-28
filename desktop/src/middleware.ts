import { NextRequest } from "next/server";

import { getRedirectionResponse, setCommonFilters } from "@/common/filters";

export const middleware = (request: NextRequest) => {
  setCommonFilters(request);

  const response = getRedirectionResponse(request);

  return response;
};
