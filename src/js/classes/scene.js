export default class Scene {

    
    constructor(canvasSelector) {
        this.canvas = document.querySelector(canvasSelector);
        this.renderer = new THREE.WebGLRenderer({
            canvas,
            alpha: true,
        });
        const fov = 75;
        const aspect = 2;  // the canvas default
        const near = 0.1;
        const far = 5;
        this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        this.camera.position.z = 4;
        this.camera.position.x = 4;
        this.scene = new THREE.Scene();
        {
            const color = 0xFFFFFF;
            const intensity = 1;
            const light = new THREE.DirectionalLight(color, intensity);
            light.position.set(-1, 2, 4);
            this.scene.add(light);
        }
        this.cubes = [];
    }

    drawGames(games, selectedIndex) {
      
        const boxWidth = 1;
        const boxHeight = 1;
        const boxDepth = 0.02;
        const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
      
        const makeInstance = (geometry, image, x) => {

          // threejs requires an image for all sides, so using a compressed very small image for other 5 sides. 
          const blankImage = 'public/img/blank_compressed.png';

          // default image if it does not exists
          image = image || 'public/img/ballpark_compressed.jpg';

          var textureLoader = new THREE.TextureLoader();                             
          var texture0 = textureLoader.load( blankImage);                       
          var texture1 = textureLoader.load( blankImage );                       
          var texture2 = textureLoader.load( blankImage );                       
          var texture3 = textureLoader.load( blankImage );                       
          var texture4 = textureLoader.load( image);                       
          var texture5 = textureLoader.load( blankImage );                       
          var cubeMaterials = [                                                      
            new THREE.MeshBasicMaterial( { map: texture0 } ),                      
            new THREE.MeshBasicMaterial( { map: texture1 } ),                      
            new THREE.MeshBasicMaterial( { map: texture2 } ),                      
            new THREE.MeshBasicMaterial( { map: texture3 } ),                      
            new THREE.MeshBasicMaterial( { map: texture4 } ),                      
            new THREE.MeshBasicMaterial( { map: texture5 } )                       
          ]; 
            
            const loader = new THREE.TextureLoader();

            let textureCube = loader.load( [image,image,image,image,image,image] );

            let material = new THREE.MeshBasicMaterial( { color: 0xffffff, envMap: textureCube } );

            const cube = new THREE.Mesh(geometry, cubeMaterials);
            this.scene.add(cube);
      
            cube.position.x = x;
      
            return cube;
        }

        for (const index in games) {
            this.cubes.push(makeInstance(geometry, games[index].getImage(),  (-4 + index*2)));
        }

        function resizeRendererToDisplaySize(renderer) {
          const canvas = renderer.domElement;
          const width = canvas.clientWidth;
          const height = canvas.clientHeight;
          const needResize = canvas.width !== width || canvas.height !== height;
          if (needResize) {
            renderer.setSize(width, height, false);
          }
          return needResize;
        }
      
        const render = (time) => {
          time *= 0.001;
      
          if (resizeRendererToDisplaySize(this.renderer)) {
            const canvas = this.renderer.domElement;
            this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
            this.camera.updateProjectionMatrix();
          }

          this.renderer.render(this.scene, this.camera);
      
          requestAnimationFrame(render);
        }

      
        requestAnimationFrame(render);

        this.moveCamera(selectedIndex);
      }

      moveCamera(index, previousIndex = 0) {
        this.cubes[previousIndex].scale.set(1,1,1);
        this.cubes[index].scale.set(1.5,1.5,2);
        if (index !== previousIndex) {
            this.camera.position.x = index > previousIndex ? this.camera.position.x + 2 : this.camera.position.x -2;
        }
      }
}