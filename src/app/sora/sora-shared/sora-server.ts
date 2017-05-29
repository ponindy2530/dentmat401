import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { CookieService } from 'angular2-cookie/core';
import 'rxjs/add/observable/throw';
@Injectable()
export class SoraService {
    opts: RequestOptions;



    //ZGJfZGVudG1hdDQwMQ=
    _Connect: string = this.atou('ZGJfZGVudHN0b2Nr'); //Name Database Connect ZGJfZGVudHN0b2Nr
    _Token: string = this.atou('cGlwYXRwcm9tcGF1bmc'); //Name Token
    //----------------------------------_api-----------------------------------------------//
    _urlServer: string = this.atou('aHR0cDovL2RtZnplcm8uY29tLw='); //URL Web
    _urlFolder: string = this.atou('cC9wb24tYXBpLXNlcnZlLw=');
    _urlPhp: string = this.atou('YXBpLXNlcnZlLWRtZnplcm8ucGhwLw=');
    //------------------------------------------------------------------------------------//

    urlserver_2: any = "http://dmfzero.com/";
    dbserver_2: any = "dmfzero_db_dentstock1";
    dbsqlname_2: any = "sql_dentmat";
    //------------------------------------------------------------------------------------//
    private headers: Headers
    constructor(
        private _http: Http,
        private _CookieService: CookieService
    ) {

    }

    private _api = this._urlServer + this._urlFolder + this._urlPhp;
    private _apimail = this.urlserver_2 + "p/pon-api-serve/mail-serve.php/";
    //-------------------------------------------------------------------------------------------//    
    //เพิ่มแก้ไขข้อมูล
    addData(tbl: any, fd: any, param: any, pd: any): Observable<any> {
        const apiToken = this.utoa(param + '.' + this._Connect + '.' + this._Token + '.' + tbl + '.' + fd);
        const url = this._api + "addData/" + apiToken;
        //   console.log(url);
        const body = JSON.stringify(pd);
        //    console.log(body);
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        const options = new RequestOptions({ headers: headers });
        return this._http.post(url, body, { headers: headers })
            // .map(res => { console.log(res.json()) })
            .map((response: Response) => response.json())
    }
    //ลบข้อมูล
    delData(tbl: any, fd: any, param: any): Observable<any> {
        const apiToken = this.utoa(param + '.' + this._Connect + '.' + this._Token + '.' + tbl + '.' + fd);
        const url = this._api + "delData/" + apiToken;
        // console.log(url);
        return this._http.get(url)//this._productUrlOne)
            .map((response: Response) => response.json())
        // .catch(this.handleError)
    }

    apiData(key: number): Observable<any> {
        const apiToken = this.utoa(key + '.' + this._Connect + '.' + this._Token);
        const url = this._api + "apiData/" + apiToken;
        // console.log(url);
        return this._http.get(url)//this._productUrlOne)
            .map((response: Response) => response.json())
        // .catch(this.handleError)
    }

    apiData1(key: number, param1: any): Observable<any> {
        const apiToken = this.utoa(key + '.' + this._Connect + '.' + this._Token + '.' + param1);
        const url = this._api + "apiData1/" + apiToken;
        // console.log(url);
        return this._http.get(url)//this._productUrlOne)
            .map((response: Response) => response.json())
        // .catch(this.handleError)
    }

    apiData2(key: number, param1: any, param2: any): Observable<any> {
        const apiToken = this.utoa(key + '.' + this._Connect + '.' + this._Token + '.' + param1 + '.' + param2);
        const url = this._api + "apiData2/" + apiToken;
        // console.log(url);
        return this._http.get(url)//this._productUrlOne)
            .map((response: Response) => response.json())
        // .catch(this.handleError)
    }
    apiData3(key: any, param1: any, param2: any, param3: any): Observable<any> {
        const apiToken = this.utoa(key + '.' + this._Connect + '.' + this._Token + '.' + param1 + '.' + param2 + '.' + param3);
        const url = this._api + "apiData3/" + apiToken;
        // console.log(url);
        return this._http.get(url)//this._productUrlOne)
            .map((response: Response) => response.json())
        // .catch(this.handleError)
    }

    apiData4(key: any, param1: any, param2: any, param3: any, param4: any): Observable<any> {
        const apiToken = this.utoa(key + '.' + this._Connect + '.' + this._Token + '.' + param1 + '.' + param2 + '.' + param3 + '.' + param4);
        const url = this._api + "apiData4/" + apiToken;
        // console.log(url);
        return this._http.get(url)//this._productUrlOne)
            .map((response: Response) => response.json())
        // .catch(this.handleError)
    }

    //--------------------------------------------------------------------------------------------------------------//

    //--------------------------------------------------------------------------------------------//
    //Email

    sentEmail(pd: any): Observable<any> {
        let url = this._apimail + "sentEmail";
        //   console.log(url);
        let body = JSON.stringify(pd);
        //    console.log(body);
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        let options = new RequestOptions({ headers: headers });
        return this._http.post(url, body, { headers: headers })
            // .map(res => { console.log(res.json()) })
            .map((response: Response) => response.json())
    }

    //-------------------------------------------------------------------------------------------------//


    loginServe(id: string): Observable<any> {
        let url = "http://203.157.182.15/accounts/api/loginForm/" + id;
        // console.log(url);
        return this._http.get(url)//this._productUrlOne)
            .map((response: Response) => response.json())
        // .catch(this.handleError)
    }

    //---------------------------------------------------------------------------------------------//

    ckip(): Observable<any> {
        let url = "https://jsonip.com/?callback=";
        // console.log(url);
        return this._http.get(url)//this._productUrlOne)
            .map((response: Response) => response.json())
        // .catch(this.handleError)
    }

    //--------------------------------------------------------------------------------------//



    urlhst(): Observable<any> {
        let url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLPnfD_CbUQCUK3R4LGyhgCMIO36NeihOn&key=AIzaSyBuYg8usCx5lXW2HeiBKGGiBfgpMLCaOf0";
        // console.log(url);
        return this._http.get(url)//this._productUrlOne)
            .map((response: Response) => response.json())
        // .catch(this.handleError)
    }

    //----------------------------------------------------------------------------------------//
    private handleError(err: Response) {
        let details = { status: err.status, error: err.json() };
        return Observable.throw(details);
    }

    // ucs-2 string to base64 encoded ascii เข้ารหัส
    utoa(str) {
        return window.btoa(str).replace('=', '');
    }
    // base64 encoded ascii to ucs-2 string ถอดรหัส
    atou(str) {
        return window.atob(str.replace('=', ''));
    }

    datenows() {
        const currentTime = new Date();
        const monthnow = ("0" + (currentTime.getMonth() + 1)).slice(-2);
        const dnow = ("0" + (currentTime.getDate() + 1)).slice(-2);
        const datenows = currentTime.getFullYear() + '-' + monthnow + '-' + dnow;
        return datenows;
    }

    loginPath(onPath: string) {
        const fullPath = this.fullPath();
        const followup = this.utoa(fullPath);
        const cli = this.utoa('cpho#005');
        const loc = this.utoa('http://203.157.182.15/accounts/api/loginForm');
        const clog = this.utoa('http://127.0.0.1:4200/login?');

        return 'http://203.157.182.15/accounts/' + onPath + '?followup=' + followup + '&cli=' + cli + '&loc=' + loc + '&clog=' + clog;
    }

    logout(logoutUrl) {
        localStorage.removeItem('tokenHeader');
        localStorage.removeItem('tokenPayload');
        this._CookieService.removeAll();
        window.location.href = logoutUrl;
    }

    fullPath() {
        return window.location.href;
    }

    getLogin(id: string): Observable<any> {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        let url = 'http://203.157.182.15/accounts/api/loginForm/' + id;
        // headers.append('Content-Type', 'application/json');
        return this._http.get(url)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }


    Qds() {
        const currentTime = new Date();
        const datenows = currentTime.getFullYear() + '-' + '10' + '-' + '01';
    }











    // loginstart(param: any): Observable<any> {
    //     let url = this._api + "loginstart&key=" + param;
    //     //console.log(url);
    //     return this._http.get(url)//this._productUrlOne)
    //         .map((response: Response) => response.json())
    //     // .catch(this.handleError)
    // }

    // login(pd: any): Observable<any> {
    //     let url = this._api + "login";
    //     //   console.log(url);
    //     let body = JSON.stringify(pd);
    //     //    console.log(body);
    //     let headers = new Headers();
    //     headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    //     let options = new RequestOptions({ headers: headers });
    //     return this._http.post(url, body, { headers: headers })
    //         // .map(res => { console.log(res.json()) })
    //         .map((response: Response) => response.json())
    // }

    // urlyt(): Observable<any> {
    //     let url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLPnfD_CbUQCUK3R4LGyhgCMIO36NeihOn&key=AIzaSyBuYg8usCx5lXW2HeiBKGGiBfgpMLCaOf0";
    //     // console.log(url);
    //     return this._http.get(url)//this._productUrlOne)
    //         .map((response: Response) => response.json())
    //     // .catch(this.handleError)
    // }

    // uploadFile(pd: any): Observable<any> {
    //     let url = this._apifile + "uploadFile";
    //     //   console.log(url);
    //     let body = JSON.stringify(pd);
    //     //    console.log(body);
    //     let headers = new Headers();
    //     headers.append('Content-Type', 'multipart/form-data');
    //     headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    //     let options = new RequestOptions({ headers: headers });
    //     return this._http.post(url, body, { headers: headers })
    //         // .map(res => { console.log(res.json()) })
    //         .map((response: Response) => response.json())
    // }



}



