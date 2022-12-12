import { Component, OnInit } from '@angular/core';
import { AppISService } from 'src/app/services/app-is.service';

@Component({
  selector: 'app-app-i',
  templateUrl: './app-i.page.html',
  styleUrls: ['./app-i.page.scss'],
})
export class AppIPage implements OnInit {

  constructor(private appisService:AppISService) { }
  writers:any;


  ngOnInit() {
    this.appisService.getWriter().subscribe((res)=>{
      console.log(res);
      this.writers=res;
      
    })
  }

}
