///<reference path="Vector3.d.ts" />
///<reference path="Plane.d.ts" />


export class Ray {

    constructor(origin: Vector3, direction: Vector3);
    constructor();

    intersectPlane(plane: Plane, out?: Vector3): Vector3;

    mirrorAgainstPlane(plane: Plane): void;

}