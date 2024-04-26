import { HttpResponse, http } from "msw"
import { CancelOrderParams } from "../../../../src/api/orders/cancel-order"

export const cancelOrderMock = http.patch<CancelOrderParams, never, never>(
  "/orders/:orderId/cancel",
  ({ params }) => {
    if (params.orderId === "error-order-id") {
      return new HttpResponse(null, { status: 400 })
    }

    return new HttpResponse(null, { status: 204 })
  }
)
