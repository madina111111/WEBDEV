import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gallery } from "../album";
import { AlbumService } from "../albums.service";

@Component({
  selector: 'app-post-gallery',
  templateUrl: './post-gallery.component.html',
  styleUrls: ['./post-gallery.component.css']
})
export class PostGalleryComponent {
  album: Gallery;
  gallery: Gallery[];
  loaded: boolean;
  curId: number;

  constructor(private route: ActivatedRoute, private postService: AlbumService) {
    this.album = {} as Gallery;
    this.loaded = true;
    this.gallery = [];
    this.curId = 0;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let _id = params.get('id');
      if (_id) {
        let id = +_id;
        this.curId = id;
        this.getGallery(id);        
      }
    });

  }


  getGallery(id: number): void {
    this.loaded = false;
    this.postService.getGallery(id).subscribe((album) =>{
      this.gallery = album as Gallery[];
      this.loaded = true;
    })
  }

  returnBack(){
    let href = "http://localhost:4200/posts/" + this.curId;
    window.open(href);
  }

}
