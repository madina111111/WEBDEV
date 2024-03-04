import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from "../album";
import {AlbumService} from "../albums.service";
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {
  post: Album;
  loaded: boolean;
  newTitle:string;

  constructor(private route: ActivatedRoute,
              private postService: AlbumService) {
    this.post = {} as Album;
    this.loaded = true;
    this.newTitle = "";
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let _id = params.get('id');
      if (_id) {
        let id = +_id;
        this.loaded = false;
        this.postService.getPost(id).subscribe((post) => {
          this.post = post;
          this.loaded = true;
        })
      }
    });
  }

  saveTitle(): void{
    this.postService.updateAlbum(this.post.id, this.newTitle).subscribe((post) => {
      this.post.title = post.title;
      this.newTitle = "";
    })
  }
}
