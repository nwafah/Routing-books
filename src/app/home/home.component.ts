import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Courses } from '../courses-data/courses';
import { CoursesService } from '../courses-data/courses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  courseList$!:Observable<Courses[]>;

  constructor(private coursesService:CoursesService){}

  ngOnInit(): void {
    this.courseList$=this.coursesService.getAllCourses();
  }

}