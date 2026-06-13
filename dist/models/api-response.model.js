"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderResponse = renderResponse;
function renderResponse(response, formatter) {
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
            const _check = response;
            throw new Error(`Unhandled status: ${JSON.stringify(_check)}`);
        }
    }
}
