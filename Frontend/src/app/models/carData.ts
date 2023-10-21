export interface CarData {
    gpsData: {
      type: string;
      coordinates: [number, number];
    };
    _id: string;
    carModel: string;
    carNumberplate: string;
    crashData: {
      impactForce: number;
      location: string;
    }[];
    __v: number;
  }
