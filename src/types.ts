export interface Program {
  id: string;
  title: string;
  description: string;
  benefit: string;
  duration: string;
  intensity: 'Gentle' | 'Moderate' | 'High';
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  age: number;
  weightLost?: string;
  rating: number;
  quote: string;
  program: string;
  imageUrl?: string;
  videoUrl?: string; // Simulated link or trigger modal content
}

export interface BookingDetails {
  name: string;
  email: string;
  phone: string;
  programType: string;
  sessionType: 'online' | 'offline';
  consent: boolean;
}

