import React, { useContext, useEffect, useState } from "react";
import * as THREE from "three";
import Stats from "three/addons/libs/stats.module.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";
import { ActiveContext } from "../context/ActiveContext";

const Background = () => {
  const { isLoading, setIsLoading } = useContext(ActiveContext);

  useEffect(() => {
    let camera, scene, renderer, stats;

    const clock = new THREE.Clock();

    let mixer;

    init();
    animate();

    function init() {
      const container = document.createElement("div");
      document.body.appendChild(container);

      camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        2000
      );
      camera.position.set(100, 200, 300);

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xa0f0a0);
      scene.fog = new THREE.Fog(0xa0f0a0, 200, 1000);

      const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
      hemiLight.position.set(0, 200, 0);
      scene.add(hemiLight);

      const dirLight = new THREE.DirectionalLight(0xa0f0a0);
      dirLight.position.set(0, 200, 100);
      dirLight.castShadow = true;
      dirLight.shadow.camera.top = 180;
      dirLight.shadow.camera.bottom = -100;
      dirLight.shadow.camera.left = -120;
      dirLight.shadow.camera.right = 120;
      scene.add(dirLight);

      // scene.add(new THREE.CameraHelper(dirLight.shadow.camera));

      // ground
      const mesh = new THREE.Mesh(
        new THREE.PlaneGeometry(2000, 2000),
        new THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false })
      );
      mesh.rotation.x = -Math.PI / 2;
      mesh.receiveShadow = true;
      scene.add(mesh);

      // const grid = new THREE.GridHelper(2000, 20, 0x000000, 0x000000);
      // grid.material.opacity = 0.2;
      // grid.material.transparent = true;
      // scene.add(grid);

      // model
      const loader = new FBXLoader();
      loader.load("/assets/models/fbx/SambaDancing.fbx", function (object) {
        setIsLoading(true);
        mixer = new THREE.AnimationMixer(object);

        const action = mixer.clipAction(object.animations[0]);
        action.play();

        object.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        scene.add(object);
        setIsLoading(false);
        // object.position.z = 1;
      });

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.shadowMap.enabled = true;
      container.appendChild(renderer.domElement);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.target.set(0, 100, 0);
      controls.update();

      window.addEventListener("resize", onWindowResize);

      // stats
      stats = new Stats();
      // container.appendChild(stats.dom);
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    //

    function animate() {
      requestAnimationFrame(animate);

      const delta = clock.getDelta();

      if (mixer) mixer.update(delta);

      renderer.render(scene, camera);

      stats.update();
    }
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="absolute w-screen h-screen z-[1000] bg-[#A0F0A0] text-center">
          <div class="flex justify-center items-center h-screen">
            <div class="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20  rounded-full border-2 border-white"></div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Background;
