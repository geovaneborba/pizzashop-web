import { HttpResponse, http } from "msw"
import { GetMonthOrdersAmountResponse } from "../../../../src/api/metrics/get-month-orders-amount"

export const getMonthOrdersAmountMock = http.get<
  never,
  never,
  GetMonthOrdersAmountResponse
>("/metrics/month-orders-amount", async () => {
  return HttpResponse.json({
    amount: 200,
    diffFromLastMonth: 7,
  })
})
