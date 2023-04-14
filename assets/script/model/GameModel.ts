import { _decorator, Component, Node, Label, Camera, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameModel')
export class GameModel extends Component {
    @property(Label)
    levelLb:Label;
    @property(Camera)
    camera:Camera;

    //
    @property(Node)
    levelNode:Node;
    @property(Prefab)
    levelPrefab:Prefab[]=[];

    //
    gameScore=0;
    currentLevel = 0;
    gameLevel;
    
    start() {

    }
}


