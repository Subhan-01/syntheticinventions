import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  loading: boolean = true;  // Show the loader by default

  // You can control the loading state through this component
  hideLoader() {
    this.loading = false;
  }
}
