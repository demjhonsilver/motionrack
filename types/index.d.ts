declare module 'motionrack' {
    // Define your types here, for example:
    interface MotionData {
      animationName: string;
      animationDuration?: string;
    }
  
    // Define the motionRack function
    function motionRack(): void;
  
    // Export the motionRack function
    export default motionRack;
  }
  