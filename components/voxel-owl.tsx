import { useState, useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { loadGLTFModel } from '../libs/model';

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const VoxelOwl = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const refRenderer = useRef<THREE.WebGLRenderer | null>(null);

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer;
    const { current: container } = refContainer;
    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      renderer.setSize(scW, scH);
    }
  }, []);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer;
    if (container) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);
      refRenderer.current = renderer;
      const scene = new THREE.Scene();

      const target = new THREE.Vector3(-0.5, 1.2, 0);
      const initialCameraPosition = new THREE.Vector3(
        30 * Math.sin(0.7 * Math.PI),
        60,
        30 * Math.cos(0.7 * Math.PI)
      );

      // 640 -> 240
      // 8   -> 6
      const scale = scH * 0.0005 + 3.8;
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.0001,
        500
      );
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;

      loadGLTFModel(scene, '/owl-baked.glb', {
        receiveShadow: false,
        castShadow: false
      }).then(() => {
        animate();
        setLoading(false);
      });

      let req = null;
      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);

        frame = frame <= 100 ? frame + 1 : frame;

        if (frame <= 100) {
          const p = initialCameraPosition;
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

          camera.position.y = 10;
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
          camera.lookAt(target);
        } else {
          controls.update();
        }

        renderer.render(scene, camera);
      };

      return () => {
        cancelAnimationFrame(req);
        renderer.domElement.remove();
        renderer.dispose();
      };
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false);
    return () => {
      window.removeEventListener('resize', handleWindowResize, false);
    };
  }, [handleWindowResize]);

  return (
    <div
      ref={refContainer}
      className="voxel-owl relative mx-auto mt-[20px] mb-[10px] w-[280px] h-[280px] border dark:bg-slate-900 bg-slate-400 border-slate-600"
    >
      {loading && (
        <div
          className="absolute left-1/2 top-1/2 transform[-translate-x-1/2 -translate-y-1/2]"
          style={{ '--spinner-size': '3rem' } as React.CSSProperties}
        >
          <div className="border-4 border-t-4 border-blue-500 rounded-full animate-spin h[3rem] w[3rem]"></div>
        </div>
      )}
    </div>
  );
};

export default VoxelOwl;
