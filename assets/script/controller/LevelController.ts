import { _decorator, CCFloat, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('LevelController')
export class LevelController extends Component {
    @property({
        type:CCFloat
    })
    fovNumber:number = 64;
    getFOV(){
        return this.fovNumber;
    }

}

