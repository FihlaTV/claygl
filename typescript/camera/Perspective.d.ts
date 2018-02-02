///<reference path="../Camera.d.ts" />
export namespace clay {

    export module camera {

        interface IPerspectiveCameraOption extends ICameraOption {
            fov?: number;
            aspect?: number;
            near?: number;
            far?: number;
        }

        export class Perspective extends Camera {

            constructor(option?: IPerspectiveCameraOption);

            fov: number;

            aspect: number;

            near: number;

            far: number;
        }
    }
}