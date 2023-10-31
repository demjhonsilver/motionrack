declare module 'motionrack' {
  // Define your types here:
  type AnimationOptions = {
    animationName: string;
    animationDuration?: string;
  };

  // Export the motionRack function
  export const motionRack: (options?: AnimationOptions) => void;
}
