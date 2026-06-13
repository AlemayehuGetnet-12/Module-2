"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.describeCourse = describeCourse;
function describeCourse(course) {
    switch (course.status) {
        case "DRAFT":
            return `Draft created by ${course.createdBy} at ${course.createdAt}`;
        case "PUBLISHED":
            return `Published at ${course.publishedAt}. Syllabus: ${course.syllabus}`;
        case "ACTIVE":
            return `Active with ${course.enrolledCount} students since ${course.startDate}`;
        case "ARCHIVED":
            return `Archived at ${course.archivedAt}. Final enrollment: ${course.finalEnrollmentCount}`;
        case "CANCELLED":
            return `Cancelled due to: ${course.reason} at ${course.cancelledAt}`;
        default: {
            // This line ensures compile-time safety.
            // If a case is missing, TypeScript will flag an error here.
            const _check = course;
            throw new Error(`Unhandled status: ${JSON.stringify(_check)}`);
        }
    }
}
