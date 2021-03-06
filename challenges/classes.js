// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakers {
  constructor (length, width, height) {
  this.length = length;
  this.width = width;
  this.height = height;
}
volume (length, width, height) {
  return this.length * this.width * this.height;
}
surfaceArea (length, width, height) {
  return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
}
}
// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakers {
  constructor(length, width, height) {
    super(length, width, height);

}
cubeVolume(length) {

    return Math.pow(this.length, 4);
}
cubeSurfaceArea(length) {
    return 2 * (Math.pow(this.length, 3));
}
}

const cube = new CubeMaker(8, 8, 8);

console.log(cube.cubeVolume())
console.log(cube.cubeSurfaceArea())
