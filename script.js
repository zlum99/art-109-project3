import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';

import {
  OrbitControls
} from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';

import {
  FBXLoader
} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/FBXLoader.js';

import {
  GLTFLoader
} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/GLTFLoader.js';


class NatureWorld {
  constructor() {
    this._Initialize();
  }

  _Initialize() {
    this._threejs = new THREE.WebGLRenderer({
      antialias: true,
    });
    this._threejs.shadowMap.enabled = true;
    this._threejs.shadowMap.type = THREE.PCFSoftShadowMap;
    this._threejs.setPixelRatio(window.devicePixelRatio);
    this._threejs.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(this._threejs.domElement);

    window.addEventListener('resize', () => {
      this._OnWindowResize();
    }, false);

    const fov = 60;
    const aspect = 1920 / 1080;
    const near = 1.0;
    const far = 1000.0;
    this._camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    this._camera.position.set(75, 20, 0);

    this._scene = new THREE.Scene();

    let light = new THREE.DirectionalLight(0xFFFFFF, 1.0);
    light.position.set(20, 100, 10);
    light.target.position.set(0, 0, 0);
    light.castShadow = true;
    light.shadow.bias = -0.001;
    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 2048;
    light.shadow.camera.near = 0.1;
    light.shadow.camera.far = 500.0;
    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 500.0;
    light.shadow.camera.left = 100;
    light.shadow.camera.right = -100;
    light.shadow.camera.top = 100;
    light.shadow.camera.bottom = -100;
    this._scene.add(light);

    light = new THREE.AmbientLight(0x101010);
    this._scene.add(light);

    const controls = new OrbitControls(
      this._camera, this._threejs.domElement);
    controls.target.set(0, 20, 0);
    controls.update();

    const loader = new THREE.CubeTextureLoader();
    const texture = loader.load([
      './assets/posx.jpg',
      './assets/negx.jpg',
      './assets/posy.jpg',
      './assets/negy.jpg',
      './assets/posz.jpg',
      './assets/negz.jpg',
    ]);
    this._scene.background = texture;

    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(150, 150, 150, 150),
      new THREE.MeshStandardMaterial({
        color: 0xAFE5,
      }));
    plane.castShadow = false;
    plane.receiveShadow = true;
    plane.rotation.x = -Math.PI / 2;
    this._scene.add(plane);

    this._mixers = [];
    this._previousRAF = null;

    this._LoadModel();
    this._LoadModel2();
    this._LoadModel3();
    this._LoadModel4();
    this._LoadModel5();
    this._LoadModel6();
    this._LoadModel7();
    this._LoadModel8();
    this._LoadModel9();

    this._RAF();
  }

  _LoadModel() {
    const loader = new GLTFLoader();
    loader.load('./assets/Trees/scene.gltf', (gltf) => {
      gltf.scene.traverse(c => {
        c.castShadow = true;
      });

      //set position and scale
      var mesh = gltf.scene;
      mesh.position.set(30, 0, 100);
      mesh.scale.set(.25, .25, .25);

      this._scene.add(gltf.scene);
    });
  }

  _LoadModel2() {
    const loader = new GLTFLoader();
    loader.load('./assets/Trees/scene.gltf', (gltf) => {
      gltf.scene.traverse(c => {
        c.castShadow = true;
      });

      //set position and scale
      var mesh = gltf.scene;
      mesh.position.set(30, 0, 0);
      mesh.scale.set(.25, .25, .25);

      this._scene.add(gltf.scene);
    });
  }

  _LoadModel3() {
    const loader = new GLTFLoader();
    loader.load('./assets/Trees/scene.gltf', (gltf) => {
      gltf.scene.traverse(c => {
        c.castShadow = true;
      });

      //set position and scale
      var mesh = gltf.scene;
      mesh.position.set(-60, 0, 100);
      mesh.scale.set(.25, .25, .25);

      this._scene.add(gltf.scene);
    });
  }

  _LoadModel4() {
    const loader = new GLTFLoader();
    loader.load('./assets/Trees/scene.gltf', (gltf) => {
      gltf.scene.traverse(c => {
        c.castShadow = true;
      });

      //set position and scale
      var mesh = gltf.scene;
      mesh.position.set(-50, 0, 10);
      mesh.scale.set(.25, .25, .25);

      this._scene.add(gltf.scene);
    });
  }

  _LoadModel5() {
    const loader = new GLTFLoader();
    loader.load('./assets/Trees/scene.gltf', (gltf) => {
      gltf.scene.traverse(c => {
        c.castShadow = true;
      });

      //set position and scale
      var mesh = gltf.scene;
      mesh.position.set(-90, 0, 60);
      mesh.scale.set(.25, .25, .25);

      this._scene.add(gltf.scene);
    });
  }

  _LoadModel6() {
    const loader = new GLTFLoader();
    loader.load('./assets/tree2/scene.gltf', (gltf) => {
      gltf.scene.traverse(c => {
        c.castShadow = true;
      });

      //set position and scale
      var mesh = gltf.scene;
      mesh.position.set(-60, 0, -40);
      mesh.scale.set(.09, .09, .09);

      this._scene.add(gltf.scene);
    });
  }

  _LoadModel7() {
    const loader = new GLTFLoader();
    loader.load('./assets/tree2/scene.gltf', (gltf) => {
      gltf.scene.traverse(c => {
        c.castShadow = true;
      });

      //set position and scale
      var mesh = gltf.scene;
      mesh.position.set(20, 0, 40);
      mesh.scale.set(.09, .09, .09);

      this._scene.add(gltf.scene);
    });
  }


  _LoadModel8() {
    const loader = new GLTFLoader();
    loader.load('./assets/tree2/scene.gltf', (gltf) => {
      gltf.scene.traverse(c => {
        c.castShadow = true;
      });

      //set position and scale
      var mesh = gltf.scene;
      mesh.position.set(20, 0, -40);
      mesh.scale.set(.09, .09, .09);

      this._scene.add(gltf.scene);
    });
  }

  _LoadModel9() {
    const loader = new GLTFLoader();
    loader.load('./assets/tree2/scene.gltf', (gltf) => {
      gltf.scene.traverse(c => {
        c.castShadow = true;
      });

      //set position and scale
      var mesh = gltf.scene;
      mesh.position.set(10, 0, 0);
      mesh.scale.set(.09, .09, .09);

      this._scene.add(gltf.scene);
    });
  }


  _OnWindowResize() {
    this._camera.aspect = window.innerWidth / window.innerHeight;
    this._camera.updateProjectionMatrix();
    this._threejs.setSize(window.innerWidth, window.innerHeight);
  }

  _RAF() {
    requestAnimationFrame(() => {
      this._threejs.render(this._scene, this._camera);
      this._RAF();
    });
  }
}


let _APP = null;

window.addEventListener('DOMContentLoaded', () => {
  _APP = new NatureWorld();
});
