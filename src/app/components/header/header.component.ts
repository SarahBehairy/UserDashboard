import { Component, EventEmitter, Input, Output } from "@angular/core";
import { HeaderConfig, _defaultHeaderConfig } from "./interfaces/header.config";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
  })
  export class HeaderComponent {
    @Input() config: HeaderConfig = _defaultHeaderConfig;
    @Output() backBtnClickHandler= new EventEmitter<void>();
    @Output() searchBtnClickHandler= new EventEmitter<string>();

    onBackClick(): void {
        this.backBtnClickHandler.emit();
    }

    onSearch(searchTerm: string): void {
        this.searchBtnClickHandler.emit(searchTerm);
    }
  }