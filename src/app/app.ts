import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './component/header/header';
import { FormsModule } from '@angular/forms';
interface Itodo {
  ten:String;
  monHoc:String;
  douuTien:String;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title: string = 'Xin chào WD20307 - Ahihih'
  classname: string = "text-red"
  fontweight: string = 'font-bold'
  show: boolean = true
  color: string = 'red'

  chieudai: number = 0
  chieurong: number = 0
  dientich:number = 0
todos:Itodo[]=[
  {ten:"Sơn",douuTien:"Môn tiên Quyết",monHoc:"Java Scrict"},
  {ten:"Sơn",douuTien:"Môn bình thường",monHoc:"Node Js"},
  {ten:"Sơn",douuTien:"Môn hơi tiên quyết",monHoc:"Lập trình PHP"},
]

  // tính diện tích
  handleTinh = () => {
    this.dientich = this.chieudai*this.chieurong
  }
  handleClick = () => {
    this.classname = (this.classname == 'text-red') ? "text-blue" : 'text-red'
    this.show = !this.show
  }
}