
export interface Screenshot {
  image: string;
}

export type MouseButton = "left" | "middle" | "right";


export interface ApiResponse<T> {
  success: boolean;
  data: T;
}
