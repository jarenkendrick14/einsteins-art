export interface Employee {
  id: number;
  name: string;
  gender: 'Male' | 'Female';
  email: string;
  status: 'Active' | 'Inactive';
  salary: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

export const EMPLOYEES: Employee[] = [
  { id: 101, name: 'Maria Santos', gender: 'Female', email: 'maria@einsteinsart.com', status: 'Active', salary: 25000 },
  { id: 102, name: 'John Doe', gender: 'Male', email: 'john@einsteinsart.com', status: 'Active', salary: 18000 },
  { id: 103, name: 'Anna Cruz', gender: 'Female', email: 'anna@einsteinsart.com', status: 'Inactive', salary: 22000 },
  { id: 104, name: 'Mark Reyes', gender: 'Male', email: 'mark@einsteinsart.com', status: 'Active', salary: 30000 },
  { id: 105, name: 'Liza Soberano', gender: 'Female', email: 'liza@einsteinsart.com', status: 'Active', salary: 28000 },
];

export const PRODUCTS: Product[] = [
  { id: 1, title: 'Cubist Lady Tote', price: 1500, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800', description: 'Hand-painted tote featuring abstract cubist art.' },
  { id: 2, title: 'Floral Elegance', price: 1200, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800', description: 'Vibrant floral patterns on a classic handbag.' },
  { id: 3, title: 'Mickey Pop Art', price: 1800, image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&q=80&w=800', description: 'Playful pop culture inspired hand-painted design.' },
  { id: 4, title: 'Abstract Faces', price: 1600, image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=800', description: 'Bold colors and striking facial features.' },
];