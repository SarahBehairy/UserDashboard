import { Component, EventEmitter, Output } from "@angular/core";


@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
  })
  export class SearchBarComponent {
    @Output() search = new EventEmitter();

    onSearch(event: any): void {
        const term = event.target.value;
        this.search.emit(term);
    }
   
}