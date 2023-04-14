import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import { GameModel } from '../model/GameModel';
import { ResourceUtils } from '../utils/ResourceUtils';
import { Utils } from '../utils/Utils';
import { LevelController } from './LevelController';
const { ccclass, property } = _decorator;

@ccclass('GameController')
export class GameController extends Component {
    @property(Node)
    gameModelNode:Node;
    gameModel:GameModel;
    start() {
        this.gameModel = this.gameModelNode.getComponent(GameModel);
        this.beginLevel();
    }
    beginLevel(){
        this.gameModel.gameLevel = instantiate(this.gameModel.levelPrefab[this.gameModel.currentLevel]);
        let fov = this.gameModel.gameLevel.getComponent(LevelController).getFOV();
        this.gameModel.camera.fov = fov;
        this.gameModel.levelNode.addChild(this.gameModel.gameLevel);
    }
    onNextLevel(){
        if(this.gameModel.gameLevel){
            this.gameModel.gameLevel.destroy();
            this.gameModel.gameLevel=null;
        }
   
        if(this.gameModel.currentLevel<2){
            this.gameModel.currentLevel++;
       
        }else{
            this.gameModel.currentLevel=0;
        }

        this.gameModel.gameLevel = instantiate(this.gameModel.levelPrefab[this.gameModel.currentLevel]);
        let fov = this.gameModel.gameLevel.getComponent(LevelController).getFOV();
        this.gameModel.camera.fov = fov;
        console.log('new fov',fov);
        this.gameModel.levelNode.addChild(this.gameModel.gameLevel);
    }
    update(deltaTime: number) {
        
    }
}


