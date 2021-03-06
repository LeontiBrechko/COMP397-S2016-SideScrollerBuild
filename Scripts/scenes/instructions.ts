/**
 * Created by Leonti on 2016-07-28.
 */
module scenes {
    export class Instructions extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _instructionsLabel:objects.Label;
        private _startButton:objects.Button;

        /**
         * Creates an instance of Instructions scene.
         *
         */
        constructor() {
            super();
        }

        /**
         *
         */
        public Start():void {
            // Add Menu Label
            this._instructionsLabel = new objects.Label(
                "Instruction goes here", "60px", "Consolas", "#000000",
                320, 240
            );
            this.addChild(this._instructionsLabel);

            // add the start button
            this._startButton = new objects.Button(
                "startButton", 320, 420, true
            );
            this.addChild(this._startButton);

            // Start button event listener
            this._startButton.on("click", this._startButtonClick, this);

            // add this scene to the global scene container
            core.stage.addChild(this);
        }

        public Update():void {
            // scene updates happen here...
        }

        // EVENT HANDLERS ++++++++++++++++

        private _startButtonClick(event:createjs.MouseEvent):void {
            // Switch the scene
            core.scene = config.Scene.PLAY;
            core.changeScene();
        }
    }
}