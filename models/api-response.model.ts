import { Temporal } from "@js-temporal/polyfill";
export type ApiResponse<T> =
  | { status: "loading" }
  | { status: "success"; data: T; fetchedAt: Temporal.Instant }
  | { status: "error"; message: string; statusCode: number };

export function renderResponse<T>(
  response: ApiResponse<T>,
  formatter: (data: T) => string,
): string {
  switch (response.status) {
    case "loading":
      return "Loading...";

    case "success":
      // Pass the generic data to your custom formatting callback function
      return formatter(response.data);

    case "error":
      return `Error ${response.statusCode}: ${response.message}`;

    default: {
      // Safety latch pattern ensuring compile-time completeness
      const _check: never = response;
      throw new Error(`Unhandled status: ${JSON.stringify(_check)}`);
    }
  }
}
