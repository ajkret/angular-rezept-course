import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  id:number;
  editMode= false;
  subscription: Subscription;

  constructor(private route:ActivatedRoute) {  }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params) => {
      this.id = +params['id'];
      // Check routes in app.routing.module.ts
      this.editMode = params['id'] != null;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
