export default class TextureGUIManager {
    constructor(texture,gui) {
        this.texture = texture;
        this.gui = gui;
        this.API = {
            offsetX:texture.offset.x ,
            offsetY:texture.offset.y ,
            repeatX:texture.repeat.x ,
            repeatY:texture.repeat.y ,
            rotation:texture.rotation , // positive is counter-clockwise
            centerX:texture.center.x ,
            centerY:texture.center.y
        };
        this.initAPI = {...this.API};
        this.initGui(texture.name);
    }
    initGui(folderName) {

        // gui = new GUI();
        const textureGui = this.gui.addFolder(folderName);
        textureGui.open();
        const updateUvTransform =this.updateUvTransform.bind(this);

        textureGui.add(this.API, 'offsetX', -10.0, 10.0, 0.01).name('offset.x').onChange(updateUvTransform);
        textureGui.add(this.API, 'offsetY', -10.0, 10.0, 0.01).name('offset.y').onChange(updateUvTransform);
        textureGui.add(this.API, 'repeatX', 0, 2, 0.001).name('repeat.x').onChange(updateUvTransform);
        textureGui.add(this.API, 'repeatY', 0, 2, 0.001).name('repeat.y').onChange(updateUvTransform);
        textureGui.add(this.API, 'rotation', - 2.0, 2.0, 0.01).name('rotation').onChange(updateUvTransform);
        textureGui.add(this.API, 'centerX', 0.0, 1.0, 0.01).name('center.x').onChange(updateUvTransform);
        textureGui.add(this.API, 'centerY', 0.0, 1.0, 0.01).name('center.y').onChange(updateUvTransform);
        textureGui.add({f:()=>{
            
            for (const key in this.initAPI) {
                if (Object.hasOwnProperty.call(this.initAPI, key)) {
                    const value = this.initAPI[key];
                    console.log(value);
                    this.API[key]=value;
                    
                }
            }
            const controllers = textureGui.__controllers.forEach(controller=>{
                controller.updateDisplay();
            });
            updateUvTransform()
        }},'f').name('reset')
    }

    updateUvTransform() {

        const texture = this.texture;
        const API = this.API;

        if (texture.matrixAutoUpdate === true) {
            console.log('case true');

            texture.offset.set(API.offsetX, API.offsetY);
            texture.repeat.set(API.repeatX, API.repeatY);
            texture.center.set(API.centerX, API.centerY);
            texture.rotation = API.rotation; // rotation is around [ 0.5, 0.5 ]

        } else {

            console.log('case false');
            // one way...
            //texture.matrix.setUvTransform( API.offsetX, API.offsetY, API.repeatX, API.repeatY, API.rotation, API.centerX, API.centerY );

            // another way...
            texture.matrix
                .identity()
                .translate(- API.centerX, - API.centerY)
                .rotate(API.rotation)					// I don't understand how rotation can preceed scale, but it seems to be required...
                .scale(API.repeatX, API.repeatY)
                .translate(API.centerX, API.centerY)
                .translate(API.offsetX, API.offsetY);

        }

        //render();

    }

}