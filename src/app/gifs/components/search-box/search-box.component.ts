 

 import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
 
 @Component({
    selector: 'gifs-search-box',
    template: `
      <h5>Buscar:</h5>
      <input type="text"
       class="form-control"
       placeholder="Buscar Gifs...."
       (keyup.enter)="SearchTag( )"
       #txtTagInput
       >
    `
 })
 
 export class SearchBoxComponent {
    
    @ViewChild('txtTagInput')
    tagInput!: ElementRef<HTMLInputElement>;

    constructor( private GifsService: GifsService) { }


    SearchTag() {
      const newTag = this.tagInput.nativeElement.value;

      this.GifsService.searchTag(newTag);

      this.tagInput.nativeElement.value = '';
      
    }
 
   
 }