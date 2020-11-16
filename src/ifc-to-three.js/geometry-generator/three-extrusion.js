import { scene } from "../scene/three-scene.js";

function createExtrusion(points, depth) {
  // Material for mesh
  var material = new THREE.MeshPhongMaterial({ color: 0xffffff });

  //Profile
  const shapePoints = [];
  points.forEach((e) => shapePoints.push(new THREE.Vector3(e[1], -e[0])));
  var shape = new THREE.Shape(shapePoints);

  //Direction
  var v1 = new THREE.Vector3(0, 0, 0);
  var v2 = new THREE.Vector3(0, 0, depth);
  var path = new THREE.LineCurve3(v1, v2);

  //Settings
  var extrudeSettings2 = {
    bevelEnabled: false,
    steps: 1,
    extrudePath: path,
  };

  //Mesh
  var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings2);
  var mesh = new THREE.Mesh(geometry, material);
  return mesh;
}

function testExtrusion() {
  // Material for mesh
  var material = new THREE.MeshPhongMaterial({ color: 0xffffff });

  const points = [[0, 0], [2, 0], [2, 1], [0, 1]];
  //Profile
  const shapePoints = [];
  points.forEach((e) => {
    shapePoints.push(new THREE.Vector3(-e[1], e[0], 0));
  });
  console.log(shapePoints);
  var shape = new THREE.Shape(shapePoints);

  //Direction
  var v1 = new THREE.Vector3(0, 0, 0);
  var v2 = new THREE.Vector3(0, 0, 1);
  var path = new THREE.LineCurve3(v1, v2);

  //Settings
  var extrudeSettings2 = {
    bevelEnabled: false,
    steps: 1,
    extrudePath: path,
  };

  //Mesh
  var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings2);
  var mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
}

export { createExtrusion };
