import {default as a} from 'data.json';

export class Controler {

    private dataArray = a;

    show():void{
        this.dataArray.forEach(elements => console.log(elements))
    }

}