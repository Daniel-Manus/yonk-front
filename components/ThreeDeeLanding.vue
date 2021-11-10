<template>
  <div :class="'three-dee-' + uid" class="three-dee-landing">
  </div>
</template>

<script>

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { getStrapiMedia } from "../utils/medias";

export default {
  name: 'Landing',
  props: {
    model: {
      type: Object,
      default: () => ({}),
    },
    lightIntensity: {
      type: Number,
      default: () => ({}),
    },
    masterScale: {
      type: Number,
      default: 1,
    },
    background: {
      type: String,
    },
  },
  data: function () {
    return {
      uid: null,
      debug: false,
      container: null,
      windowW: 0,
      mobileBreakpoint: 588,
    }
  },
  methods: {
    getStrapiMedia,
    
    main() {
      let camera, scene, renderer, stats;

      const $this = this;
			const clock = new THREE.Clock();
      let hdrCubeMap, ldrCubeMap;
      let generatedCubeRenderTarget, hdrCubeRenderTarget, ldrCubeRenderTarget;
			let mixer;
      let fbxobject;
      const rotationTarget = new THREE.Vector2();
      const mouse = new THREE.Vector2();
      const target = new THREE.Vector2();
      let mainWidth = $this.container.offsetWidth;
      let mainHeight = $this.container.offsetHeight;
      const windowHalf = new THREE.Vector2( mainWidth / 2, mainHeight / 2 );
      let aspectRatio = 2;

      const params = {
        envMap: 'HDR',
        roughness: 1.0,
        metalness: 1.0,
      };

			init();
			animate();

      document.addEventListener( 'mousemove', onMouseMove, false );

      function onMouseMove( event ) {
        mouse.x = ( event.clientX - windowHalf.x );
        mouse.y = ( event.clientY - windowHalf.y );
      }

      function setObjSize() {        
        if (!fbxobject) return;

        aspectRatio = mainWidth / mainHeight;
          
        if (aspectRatio >= 1.3) {
          // fbxobject.position.z = 0;
          fbxobject.scale.x = $this.masterScale;
          fbxobject.scale.y = $this.masterScale;
          fbxobject.scale.z = $this.masterScale;
        } else {
          // fbxobject.position.z = -1220;
          fbxobject.scale.x = $this.masterScale / 2;
          fbxobject.scale.y = $this.masterScale / 2;
          fbxobject.scale.z = $this.masterScale / 2;
        }

      }

			function init() {

				const container = document.createElement( 'div' );

				$this.container.appendChild( container );

				camera = new THREE.PerspectiveCamera( 25, mainWidth / mainHeight, 1, 3000 );

				// camera.position.set( 0, 0, 800 );

				scene = new THREE.Scene();

				scene.background = new THREE.Color( $this.background );

				const hemiLight = new THREE.HemisphereLight( 0xfbfced, 0x919191 );
				hemiLight.position.set( 0, 200, 0 );
				scene.add( hemiLight );
        // scene.environment = envmap;

				const dirLight = new THREE.DirectionalLight( 0x878787, $this.lightIntensity );
				dirLight.position.set( 0, 200, 100 );
				dirLight.castShadow = true;
				dirLight.shadow.camera.top = 180;
				dirLight.shadow.camera.bottom = - 100;
				dirLight.shadow.camera.left = - 120;
				dirLight.shadow.camera.right = 120;

        // //PUT BACK?
				scene.add( dirLight );

				// const grid = new THREE.GridHelper( 2000, 20, 0x000000, 0x000000 );
				// grid.material.opacity = 0.1;
				// grid.material.transparent = true;
				// $this.debug && scene.add( grid );
        // $this.debug && scene.add( new THREE.CameraHelper( dirLight.shadow.camera ) );

				// model
				const loader = new FBXLoader();
				loader.load(getStrapiMedia( $this.model.url), function ( object ) {

					mixer = new THREE.AnimationMixer( object );

					const action = mixer.clipAction( object.animations[ 0 ] );
					action.play();

					object.traverse( function ( child ) {

						if ( child.isMesh ) {
							child.castShadow = true;
							child.receiveShadow = true;
						}

					} );

          object.position.y = -40

          fbxobject = object;
          setObjSize(fbxobject)

					scene.add( object );
          $this.container.style.opacity = 1;
				});


				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( mainWidth, mainHeight );
				renderer.shadowMap.enabled = true;
        renderer.outputEncoding = THREE.sRGBEncoding;

				container.appendChild( renderer.domElement );

				const controls = new OrbitControls( camera, renderer.domElement );
        controls.enableZoom = false;
        controls.enablePan = false;
				controls.target.set( 0, 0, 0 );
				controls.update();

				window.addEventListener( 'resize', onWindowResize );
        onWindowResize();

			}


			function onWindowResize() {
        $this.windowW = window.innerWidth;
        
        mainWidth = $this.container.offsetWidth;
        mainHeight = $this.container.offsetHeight;

        camera.position.set( 0, 0, 1800 );

				camera.aspect = mainWidth / mainHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( mainWidth, mainHeight );

        setObjSize(fbxobject);
        
			}


			function animate() {
				requestAnimationFrame( animate );
				render();
				// stats.update();
			}


      function render() {
        const delta = clock.getDelta();

				if ( mixer ) mixer.update( delta );

        let renderTarget, cubeMap;

				renderTarget = hdrCubeRenderTarget;

        rotationTarget.x = ( 1 - mouse.x ) * 0.0012;
        rotationTarget.y = ( 1 - mouse.y ) * 0.0018;
        
        if (fbxobject) {
          
          // if (aspectRatio >= 1.3) {
          //   // fbxobject.position.z = 0;
          //   fbxobject.scale.x = 0.5;
          //   fbxobject.scale.y = 0.5;
          //   fbxobject.scale.z = 0.5;
          // } else {
          //   // fbxobject.position.z = -1220;
          //   fbxobject.scale.x = 0.5;
          //   fbxobject.scale.y = 0.5;
          //   fbxobject.scale.z = 0.5;
          // }

          // Auto rotate mobile
          if ($this.windowW >= $this.mobileBreakpoint) {
            fbxobject.rotation.x += 0.05 * ( rotationTarget.y - fbxobject.rotation.x );
            fbxobject.rotation.y += 0.05 * ( rotationTarget.x - fbxobject.rotation.y );
          } else {
            fbxobject.rotation.y += 0.006;
          }
        }

        // scene.background = cubeMap;
        renderer.toneMappingExposure = params.exposure;
        renderer.render( scene, camera );

      }
    }

  },
  mounted() {
    this.uid = Math.floor(Math.random() * 999999999);

    // window.addEventListener('DOMContentLoaded', (event) => {
      setTimeout(() => {
        this.container = document.querySelector('.three-dee-' + this.uid)
        this.main()
      }, 1);
    // });
  }
}
</script>

<style lang="scss">

.three-dee-landing {
  height: 100%;
  opacity: 0;
  transition: opacity 0.3s ease;

  @media only screen and (max-width: 588px) {
    pointer-events: none;
  }
}

</style>