import { Component, OnInit } from '@angular/core';
import {Question} from "../../question";

@Component({
  selector: 'app-table64',
  templateUrl: './table64.component.html',
  styleUrls: ['./table64.component.less']
})
export class Table64Component extends Question implements OnInit {

    changedAnswer = [];
    answerChanged = false;
    editdisabled = false;

    mazui = ["局麻+心电血压监护", "全麻+心电血压监护"];
    chuanci = ["足背静脉", "股静脉", "股动脉"];
    rawname1 = ["胫后静脉","胫前静脉","腓静脉","腘静脉","股浅静脉","股静脉","髂静脉","髂外静脉","髂总静脉","大隐静脉"];
    rawname2 = ["肺动脉主干压力","右肺动脉","左肺动脉","肺楔压","右室压力","右房压力"];
    tf = ["否", "是"];
    array0 = new Array(3);
    array1;array2;
    array3 = new Array(6);
    gcpa = new Array(4);
    gcpb = new Array(4);
    jmpart = ["腰1", "腰2"];

    initialArray = [
        '', '', '',
        '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '',
        '', '', '', '', '', '', '  ',
        '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '', '', ''

    ];
    idArray = [
        'gca', 'gcb', 'gcc',
        'gcd1', 'gce1', 'gcf1', 'gcg1', 'gch1', 'gci1', 'gcj1', 'gck1', 'gcl1', 'gcm1', 'gcd2', 'gce2', 'gcf2', 'gcg2',  'gch2', 'gci2', 'gcj2', 'gck2', 'gcl2', 'gcm2',
        'gcn', 'gco1', 'gco2', 'gco3', 'gco4', 'gcp',
        'gcpa1', 'gcpa2', 'gcpa3', 'gcpa4', 'gcpa5', 'gcpa6', 'gcpa7',
        'gcpb1', 'gcpb2', 'gcpb3', 'gcpb4', 'gcpb5', 'gcpb6', 'gcpa7',
        'gcq1', 'gcq2', 'gcr1', 'gcr2', 'gcs1', 'gcs2', 'gct1', 'gct2', 'gcu1', 'gcu2', 'gcv1', 'gcv2'
    ];

  constructor() { super(); }

  ngOnInit() {
      this.array1 = new Array(2);
      for (let i = 0; i < this.array1.length; i++) { this.array1[i] = new Array(this.rawname1.length); }
      this.array2 = new Array(2);
      for (let i = 0; i < this.array2.length; i++) { this.array2[i] = new Array(this.rawname2.length); }
      // console.log(this.array1);
      // this.answerChange();
  }

    getAnswer() {
        this.changedAnswer = [];
        this.getInitArray();
        this.setAnswer();
        console.log(this.changedAnswer);
    }

    setAnswer() {
      for (let i = 0; i < this.initialArray.length; i++) {
            if (this.initialArray[i] && this.initialArray[i] !== '') {
                this.changedAnswer.push({
                    Record_ID: this.idArray[i],
                    Record_Value: this.initialArray[i]
                });
            }
        }
    }

    getJmparts(gcpArray){
      let temp = new Array(3);
      let gcp;
      if(gcpArray[0] ===2 ){
          gcp = [gcpArray[0],...temp,gcpArray[1],gcpArray[2],gcpArray[3]];
      }else{
          gcp = [...gcpArray,...temp];
      }
      return gcp;
    }

    getInitArray(){
        let  gcp = new Array(14);
        if( this.array3[5] === 1){
            gcp = [...this.getJmparts(this.gcpa),
                ...this.getJmparts(this.gcpb)];
        }
        this.initialArray = [...this.array0,...this.array1[0] ,...this.array1[1],...this.array3,...gcp,...this.array2[0],...this.array2[1]];
    }
    answerChange(){

    }
}
