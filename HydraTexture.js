import * as THREE from 'three';
import Hydra from 'hydra-synth';
export default class HydraTexture{
    constructor(hydraCode){
        if(!hydraCode){
            hydraCode = `
           osc(100)
           .out()
        `
        }
        let cnvs = document.createElement('canvas')
        cnvs.id = "hydra"
        cnvs.width = 512;
        cnvs.height = 512;
        let hydra = new Hydra({canvas:cnvs,makeGlobal:false,detectAudio:false})
        
        hydra.eval(hydraCode)
        
        let texture = new THREE.CanvasTexture(cnvs);
        this.texture = texture;
        
    }
}