import { Component, OnInit, ViewChild } from '@angular/core';
import {   DomSanitizer} from '@angular/platform-browser'
import { ResourceService } from 'src/app/shared/services/resource.service';
import { AddBookmarkComponent } from '../../apps/bookmarks/modal/add-bookmark/add-bookmark.component';
import { CreateTagComponent } from '../../apps/bookmarks/modal/create-tag/create-tag.component';
import { EditBookmarkComponent } from '../../apps/bookmarks/modal/edit-bookmark/edit-bookmark.component';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  @ViewChild("addbookmark") AddBookmark: AddBookmarkComponent;
  @ViewChild("editbookmark") EditBookmark: EditBookmarkComponent;
  @ViewChild("createTag") CreateTag: CreateTagComponent;

  public listBookmark: boolean = false;

  constructor(private ResourceService: ResourceService, private sanitizer: DomSanitizer) { }

  public allData = {templates:{}, businessEducation:{}};

  ngOnInit() {
    this.findAllResources()
  }

  changeLayoutBookmark() {
    this.listBookmark = !this.listBookmark
  }

  findAllResources(){
    this.ResourceService.findAll().subscribe((response:[] )=> {
      this.allData.templates = response.filter((object:any) => object.catagory == 'Templates')
      this.allData.businessEducation = response.filter((object:any) => object.catagory == 'Business Education')
    })
  }

  UrlSanitize(url){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

}
