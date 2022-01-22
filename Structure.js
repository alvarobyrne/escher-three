import * as THREE from 'three';
import HydraTexture from './HydraTexture'
export default class Structure {
    constructor(config) {
        this.config = config;
        const { gui } = config;
        gui.add(this, 'reset').name('structure reset')
        this.textures = [];
    }
    reset = () => {
        console.log(this);
        this.group.children.forEach(child => {
            console.log(child);
            child.geometry.dispose()
            child.material.dispose()
        })
    }
    getBoxFrame() {
        const config = this.config;
        const { dimensions, thickness } = config;
        const { width, height, depth } = dimensions;
        let beam = new THREE.BoxGeometry(thickness, thickness, depth);
        const group = new THREE.Group();
        const factors = [[1, 1], [1, -1], [-1, -1], [-1, 1]];
        for (let index = 0; index < 4; index++) {
            const material = new THREE.MeshBasicMaterial({ color: 'red' });
            const mesh = new THREE.Mesh(beam, material);
            const fx = factors[index][0] * 0.5;
            const fy = factors[index][1] * 0.5;
            const x = fx * (width + thickness);
            const y = fy * (height + thickness);
            mesh.position.set(x, y);

            group.add(mesh)
        }
        beam = new THREE.BoxGeometry(thickness, height, thickness);
        for (let index = 0; index < 4; index++) {
            const material = new THREE.MeshBasicMaterial({ color: 'green' });
            const mesh = new THREE.Mesh(beam, material);
            const fx = factors[index][0] * 0.5;
            const fz = factors[index][1] * 0.5;
            const x = fx * (width + thickness);
            const z = fz * (depth + thickness);
            mesh.position.set(x, 0, z);

            group.add(mesh)
        }
        beam = new THREE.BoxGeometry(width + 2 * thickness, thickness, thickness);
        for (let index = 0; index < 4; index++) {
            const material = new THREE.MeshBasicMaterial({ color: 'blue' });
            const mesh = new THREE.Mesh(beam, material);
            const fy = factors[index][0] * 0.5;
            const fz = factors[index][1] * 0.5;
            const y = fy * (height + thickness);
            const z = fz * (depth + thickness);
            mesh.position.set(0, y, z);

            group.add(mesh)
        }
        let extraBeam = new THREE.BoxGeometry(thickness, thickness, depth);
        const extraBeamMaterial = new THREE.MeshBasicMaterial({ color: 'blue' });
        const extraBeamMesh = new THREE.Mesh(extraBeam, extraBeamMaterial);
        extraBeamMesh.position.set(width * 0.5 + thickness * 0.5, 0, 0);
        group.add(extraBeamMesh);

        this.group = group;
        return group;
    }
    getFloor(){    
        const config = this.config;
        const { dimensions, thickness } = config;
        const { width, height, depth } = dimensions;
        const fovRadians = config.fov;
        const tanFOVhalves = Math.tan(fovRadians * 0.5);
        const cameraDistance = config.cameraDistance;
        const group = new THREE.Group();
        //----------------------------
        const back = -(depth * 0.5 + thickness);
        const bottom = -(height * 0.5 + thickness);
        const left = -width * 0.5 - thickness;
        const right = width * 0.5 + thickness;
        const floorDimension = 100;
        const cameraDistanceToFront = cameraDistance + back;
        const cameraDistanceToBack = cameraDistance - back;
        //--------------------------------compute perspective 1
        const diagonal = Math.hypot(right,bottom);
        const triangleDiagonal = diagonal*cameraDistanceToBack/cameraDistanceToFront;
        const distanceToTopLeft = triangleDiagonal-diagonal; 
        const alpha = Math.atan(height/width);
        const triangleLeft = distanceToTopLeft*Math.cos(alpha);
        const triangleTop = distanceToTopLeft*Math.sin(alpha);;
        
        //--------------------------------compute perspective 2
        const floorWallRight = (right * cameraDistanceToBack) / cameraDistanceToFront;
        const floorWallWidth = floorWallRight - right;
        const floorDim = (right * floorDimension) / cameraDistanceToFront;

        
        //----------------------------
        const sky = {
            x: 0,
            y: 0,
            z: -floorDimension + back
        };

        const aspect = config.aspect;
        const skyDistance = cameraDistance + back + floorDimension;
        const skyHeight = 2 * tanFOVhalves * skyDistance;
        const skyWidth = skyHeight * aspect;
        sky.geometry = new THREE.PlaneGeometry(skyWidth, skyHeight);
        sky.material = new THREE.MeshBasicMaterial({color:"#001044"});//blue
        sky.mesh = new THREE.Mesh(sky.geometry, sky.material);

        sky.mesh.position.set(sky.x, sky.y, sky.z);
        group.add(sky.mesh);
        this.sky = sky;
        //------------------------------
        const skyDistanceToCamera= cameraDistance+depth*0.5+floorDimension;
        const triangleRight = (skyDistanceToCamera*width*0.5)/(cameraDistance+depth*0.5)-width*0.5;

        const floorShape = new THREE.Shape()
            .moveTo(left-floorWallWidth-floorDim,floorDimension)
            .lineTo(triangleRight+right,floorDimension)
            .lineTo(right,0)
            .lineTo(left,0)
            .lineTo(left,-depth-thickness)
            .lineTo(left-floorWallWidth,-depth-thickness)
            .lineTo(left-floorWallWidth,0)
            .lineTo(left-floorWallWidth-floorDim,floorDimension)
        const floorShapeGeometry = new THREE.ShapeGeometry(floorShape);
        const floorShapeMaterial = new THREE.MeshBasicMaterial()
        const floorShapeMesh = new THREE.Mesh(floorShapeGeometry,floorShapeMaterial);
        floorShapeMesh.rotateX(-Math.PI*0.5);
        floorShapeMesh.position.y = bottom+0.01;
        floorShapeMesh.position.z = back;

        group.add(floorShapeMesh);
        
        this.floorBottomMaterial = floorShapeMaterial;
        this.floorGroup = group;

        const wallShape = new THREE.Shape()
            .moveTo(right,0)
            .lineTo(right,bottom)
            .lineTo(right+floorWallWidth,bottom)
            .lineTo(right+floorWallWidth,triangleTop)
            .lineTo(-triangleLeft+left,triangleTop)
            .lineTo(left,0)
            .lineTo(right,0)
        const wallShapeGeometry = new THREE.ShapeGeometry(wallShape);
        const wallShapeMaterial = new THREE.MeshBasicMaterial()
        const wallShapeMesh = new THREE.Mesh(wallShapeGeometry,wallShapeMaterial);
        wallShapeMesh.position.y = -bottom;
        wallShapeMesh.position.z = back+0.01;

        group.add(wallShapeMesh);

        this.wallBottomMaterial = wallShapeMaterial;
        this.wallGroup = group;
        return group;
    }
    addHydra(){   
        this.addSkyHydra();
        this.addFloorHydra();
    }
    addSkyHydra(){    
        const hydraTextureSky = new HydraTexture()


        this.sky.mesh.material.color = new THREE.Color('white')
        this.mapSky = this.sky.material.map = hydraTextureSky.texture;
        this.sky.material.needsUpdate = true;
        this.mapSky.name = 'sky';
        this.textures.push(this.mapSky);
    }
    addFloorHydra(){
        const hydraCodeFloor = `
        voronoi(10,2)
        .out()
        `;
        const hydraTextureFloor = new HydraTexture(hydraCodeFloor);
        this.mapFloor =this.floorBottomMaterial.map = hydraTextureFloor.texture;
        this.mapFloor.name = 'floor';
        this.mapWall = this.wallBottomMaterial.map = hydraTextureFloor.texture.clone();
        this.mapWall.name = 'wall';
        this.mapFloor.wrapS = THREE.MirroredRepeatWrapping;
        this.mapFloor.wrapT = THREE.MirroredRepeatWrapping;
        this.mapFloor.repeat.set(0.5,0.5);
        this.mapFloor.offset.set(0.2,0);
        this.mapWall.offset.set(0.2,0)
        this.mapWall.wrapS = THREE.MirroredRepeatWrapping;
        this.mapWall.wrapT = THREE.MirroredRepeatWrapping;
        this.mapFloor.magFilter = THREE.NearestFilter;
        this.mapFloor.magFilter = THREE.LinearFilter;
        this.wallBottomMaterial.needsUpdate = true;
        this.floorBottomMaterial.needsUpdate = true;
        this.textures.push(this.mapFloor,this.mapWall);
        /*
        THREE.NearestFilter
        THREE.LinearFilter
        THREE.NearestMipmapNearestFilter
        THREE.NearestMipmapLinearFilter
        THREE.LinearMipmapNearestFilter
        THREE.LinearMipmapLinearFilter
        */
    }
    updateMaps(){
        if(this.mapSky)this.mapSky.needsUpdate = true;
        if(this.mapFloor)this.mapFloor.needsUpdate = true;
        if(this.mapWall)this.mapWall.needsUpdate = true;

    }
}