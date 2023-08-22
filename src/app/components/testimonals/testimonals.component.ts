import { Component } from '@angular/core';
import { testimonyObject } from 'src/app/interfaces/testimonal.model';

@Component({
  selector: 'app-testimonals',
  templateUrl: './testimonals.component.html',
  styleUrls: ['./testimonals.component.scss']
})
export class TestimonalsComponent {
  testimonals:testimonyObject[] = [];

  ngOnInit(): void {

    this.testimonals = [
      {
        Id:1,
        name:'John Doe',
        personInfo:'Worcestershire, UK',
        testimony:'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\
        auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus\
        dolor auctor. Nulla vitae elit libero, a pharetra augue. Donec id\
        elit non mi porta gravida at eget metus. Nulla vitae elit libero,\
        a pharetra augue. Praesent commodo cursus magna, vel scelerisque\
        nisl consectetur et.',
        color:'bg-primary'

      },
      {
        Id:2,
        name:'John Doe',
        personInfo:'Worcestershire, UK',
        testimony:'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\
        auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus\
        dolor auctor. Nulla vitae elit libero, a pharetra augue. Donec id\
        elit non mi porta gravida at eget metus. Nulla vitae elit libero,\
        a pharetra augue. Praesent commodo cursus magna, vel scelerisque\
        nisl consectetur et.',
        color:'bg-danger'

      },
      {
        Id:3,
        name:'John Doe',
        personInfo:'Worcestershire, UK',
        testimony:'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\
        auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus\
        dolor auctor. Nulla vitae elit libero, a pharetra augue. Donec id\
        elit non mi porta gravida at eget metus. Nulla vitae elit libero,\
        a pharetra augue. Praesent commodo cursus magna, vel scelerisque\
        nisl consectetur et.',
        color:'bg-success'

      },
      {
        Id:4,
        name:'John Doe',
        personInfo:'Worcestershire, UK',
        testimony:'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\
        auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus\
        dolor auctor. Nulla vitae elit libero, a pharetra augue. Donec id\
        elit non mi porta gravida at eget metus. Nulla vitae elit libero,\
        a pharetra augue. Praesent commodo cursus magna, vel scelerisque\
        nisl consectetur et.',
        color:'bg-warning'

      },
      {
        Id:5,
        name:'John Doe',
        personInfo:'Worcestershire, UK',
        testimony:'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\
        auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus\
        dolor auctor. Nulla vitae elit libero, a pharetra augue. Donec id\
        elit non mi porta gravida at eget metus. Nulla vitae elit libero,\
        a pharetra augue. Praesent commodo cursus magna, vel scelerisque\
        nisl consectetur et.',
        color:'bg-white'

      },
      
    ]
  }
}
