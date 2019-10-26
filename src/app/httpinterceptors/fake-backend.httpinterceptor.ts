import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { SEARCH_RESULT_DATA } from './data/searchResultData';
import { SEARCH_RESULT_DATA_2 } from './data/searchResultData2';


@Injectable()
export class FakeBackendHttpInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize())
            .pipe(delay(150))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith('/search/') && method === 'GET':
                    return search();

                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }

        // route functions
        function search() {
            return of(new HttpResponse({ status: 200, body: new Date().getSeconds()%2 ? SEARCH_RESULT_DATA : SEARCH_RESULT_DATA_2 }));
        }
    }
}

export const fakeBackendHttpInterceptorProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendHttpInterceptor,
    multi: true
};