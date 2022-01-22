import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import dat from 'dat.gui'

import perspectiveData from "./perspective-data.json";
import Structure from './Structure'

import anotherWorld from './assets/anotherWorld.jpg';
import TextureGUIManager from './textureGUIManager';

console.log('perspectiveData : ',JSON.stringify(perspectiveData));
const renderer = new THREE.WebGLRenderer();
renderer.setClearColor('black')
document.body.appendChild(renderer.domElement)
const width =innerWidth;
const height = innerHeight;
renderer.setSize(width,height);
const fov = 45;//Camera frustum vertical field of view, from bottom to top of view, in degrees. Default is 50.
const aspect = width/height;
const near = 0.1;
const far = 1000;
const gui = new dat.GUI
gui.add({toggleCamera:()=>{
    if(camera===perspectiveCamera2){
        camera=perspectiveCamera;
        controls = orbitControls;
        orbitControls2.enabled=false;
        orbitControls.enabled=true;
    }else{
        orbitControls2.enabled=true;
        orbitControls.enabled=false;
        camera=perspectiveCamera2
        controls = orbitControls2;
    }
    render();
}},'toggleCamera')
const scene = new THREE.Scene();

const perspectiveCamera = new THREE.PerspectiveCamera(fov,aspect,near,far);
perspectiveCamera.position.set(0,2,5);
perspectiveCamera.position.set(0,0,3);
perspectiveCamera.lookAt(scene.position);
scene.add(perspectiveCamera);

const perspectiveCamera2 = new THREE.PerspectiveCamera(fov,aspect,near,far);
perspectiveCamera2.position.set(-10,0,0);
perspectiveCamera2.lookAt(scene.position);

let camera;
camera = perspectiveCamera2;
camera = perspectiveCamera;

const orbitControls = new OrbitControls(perspectiveCamera,renderer.domElement);
const orbitControls2 = new OrbitControls(perspectiveCamera2,renderer.domElement);
let controls = orbitControls2;

const cameraHelper = new THREE.CameraHelper(perspectiveCamera);
scene.add(cameraHelper)

const boxDepth = perspectiveData.structure.dimensions.depth;

const thickness = perspectiveData.structure.thickness;
const dist2Front = perspectiveCamera.position.z-(boxDepth*0.5+thickness)
const fovRadians = THREE.MathUtils.degToRad(fov);

const boxHeight = 2*(Math.tan(fovRadians*0.5)*dist2Front-thickness);
perspectiveData.structure.dimensions.height = boxHeight;
//see docs/
const boxWidth = aspect*(boxHeight+2*thickness)-2*thickness;

perspectiveData.structure.dimensions.width = boxWidth;

const cameraDistance = perspectiveCamera.position.z;
const structureConfig = {
    gui,
    fov:fovRadians,
    cameraDistance,
    aspect,
    // floorWallHeight:triangleTop,
    // floorLeft:triangleRight,
    ...perspectiveData.structure
}
const structureGenerator = new Structure(structureConfig);
const boxFrameGroup = structureGenerator.getBoxFrame();
scene.add(boxFrameGroup)
const floorGroup = structureGenerator.getFloor();
scene.add(floorGroup);
const meshNormalMaterial = new THREE.MeshNormalMaterial({
    wireframe:true
})

const boxGeometry = new THREE.BoxGeometry(boxWidth,boxHeight,boxDepth);
const mesh = new THREE.Mesh(boxGeometry,meshNormalMaterial);
scene.add(mesh);

const gridHelper = new THREE.GridHelper(20,20,'red','blue');
scene.add(gridHelper);

//--------------------------------
const anotherWorldProportions = 651/800;
const anotherWorldSpriteSize=2;
const spriteMaterial = new THREE.SpriteMaterial({map:new THREE.TextureLoader().load(anotherWorld)})
const sprite = new THREE.Sprite(spriteMaterial);
sprite.scale.set(anotherWorldSpriteSize*anotherWorldProportions,anotherWorldSpriteSize)
sprite.position.x = -2
scene.add(sprite)
sprite.visible=false

//--------------------------------
// const {thickness} = perspectiveData.structure;
let time=0;
let isAnimating = false;
let animationId;
const animate = ()=>{
    isAnimating = true;
    animationId = setInterval(()=>{
        perspectiveCamera.position.y=2+Math.sin(time*0.1);
        perspectiveCamera.position.x=0+2*Math.sin(time*0.2);
        perspectiveCamera.lookAt(scene.position)
        time+=0.5;
        
        controls.update();
        render()
    },60)
}
const animateForControls = ()=>{
    animationId = setInterval(()=>{
        controls.update();
        render();
    },60)
}
if(isAnimating){

    animateForControls()
}else{
    render()
}
function render(params) {
    renderer.render(scene,camera);
    
}
gui.add({toggleAnimation:()=>{
    clearInterval(animationId);
    isAnimating=!isAnimating;
    if(isAnimating){
        animate()
    }else{
        perspectiveCamera.position.setX(0)
        perspectiveCamera.position.setY(0)
        perspectiveCamera.lookAt(scene.position);
        animateForControls()
    }
}},'toggleAnimation')

gui.add(controls,'reset')
gui.add(orbitControls2,'reset').onFinishChange(()=>{render()}).name('orbCtrl2 reset')
gui.add(orbitControls,'reset').onFinishChange(()=>{render()}).name('orbCtrl1 reset')
gui.add({toggleSprite:()=>{
    sprite.visible=!sprite.visible;
    render()
}},'toggleSprite')
gui.add({render:()=>{
    render()
}},'render')
gui.hide();

controls.addEventListener( 'change', () => renderer.render( scene, camera ) );

gui.add(location,'reload')




document.addEventListener('keydown',(e)=>{
    if(e.key==='q'){
        orbitControls.reset();
        orbitControls2.reset();
    }
})
gui.add(gui,'hide').name('hide gui')

const animate2 = function () {
    window.requestAnimationFrame(animate2);
    structureGenerator.updateMaps();
    render()
}
structureGenerator.addHydra()
animate2()
if(structureGenerator.textures){
    structureGenerator.textures.forEach(texture=>{
        new TextureGUIManager(texture,gui)
    })
}   
