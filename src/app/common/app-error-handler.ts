import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler {
    handleError(error: any) {
        alert('An Unexpected error occurred');
        console.log(error);
    }
}