import { Component,HostListener } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import {Injectable} from '@angular/core';

function _window() : any {
  return window;
}

@Injectable()
export class WindowRef {
   get nativeWindow() : any {
      return _window();
   }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data: any = null;
  winRef: WindowRef = new WindowRef();

  // mechanism to watch for changes coming from ExtJS side on the global variable fromExtToNg
  @HostListener('window:fromExtToNg', ['$event'])
  fromExtToNgListener(event) {
    this.getMyArticles(this.winRef);
  }

  constructor(private _http: Http ) {
    this.winRef.nativeWindow.fromExtToNg = 1;//initially, display article with ID = 1
    this.getMyArticles(this.winRef);
  }

  private getMyArticles(winRef) {
    console.log("ArticleID coming from ExtJS (I am a code in Angular app) = "+ winRef.nativeWindow.fromExtToNg);
    return this._http.get('https://jsonplaceholder.typicode.com/posts/'+winRef.nativeWindow.fromExtToNg)
    .map((res: Response) => res.json())
      .subscribe(data => {
            this.data = data;
    });
  }
}