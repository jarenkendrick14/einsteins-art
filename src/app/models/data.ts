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
  { id: 1, title: 'Cubist Lady Tote', price: 1500, image: 'https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/581957491_853041643943390_5239670563099519293_n.jpg?_nc_cat=106&_nc_cb=99be929b-f3b7c874&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHtJhT8ExVwqrlNpmraG4ipNqlb9rx87gc2qVv2vHzuBxgnHLTmzljoQAIdMB6aEaa8cyy5Nu_j0tBg_W3wr8Su&_nc_ohc=N6EYmipziR4Q7kNvwFetT5V&_nc_oc=Adkqx6Cvcj5P3KVOeAZBfdSZW0wO0VORXHE7Mvsma2b8hV6Dyrv_b8LMrJJ-VmX_-vA&_nc_zt=23&_nc_ht=scontent.fmnl4-1.fna&_nc_gid=De6miPHKKZSKQ-udo3gAyQ&oh=00_AfmqXhAFPyv0NVD0f2S69QTnp4w4Z5RABvJ7AoLj2lirww&oe=693B3A0C', description: 'Hand-painted tote featuring abstract cubist art.' },
  { id: 2, title: 'Floral Elegance', price: 1200, image: 'https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/580187697_853042010610020_4962672055439042451_n.jpg?_nc_cat=110&_nc_cb=99be929b-f3b7c874&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFfLMLKWw8SDuVqS2USub0HirpoPURQT9iKumg9RFBP2Ax502UFuY-3PiqnbgJVN1AK8ZrIRd-Vf76XXg1fBEve&_nc_ohc=ugu647Pz0wQQ7kNvwG1nysw&_nc_oc=Adn7VCIDjZQ1z7YifVUJphS7Z3BTTPuJZILfI_T32NYgVaXlMqUkxCnPEcd3szj9dKA&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&_nc_gid=DEDx3we8xtZyRS_BU2Y1Cg&oh=00_AfllaOX-iXZhNVanB-wShEqBphs4uw5GL-G7LzeF8iMMaQ&oe=693B3FE1', description: 'Vibrant floral patterns on a classic handbag.' },
  { id: 3, title: 'Mickey Pop Art', price: 1800, image: 'https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/581959150_853041683943386_5143611857050313338_n.jpg?_nc_cat=100&_nc_cb=99be929b-f3b7c874&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeENVVwmkBrvFAr8Styj6hzPw-ZletfHtrjD5mV618e2uKn1795h0AD7Vdpb5W1Jknr1lKVbX4KJfEM5dy9yqHCc&_nc_ohc=ZWkiQLY7X0gQ7kNvwGGBhoR&_nc_oc=AdkkzlXYAYzc-dTtILhaFSAAembOybN2BMsettk-f4Eeps9neyxE7ay_Q-ZcQHwRjQ0&_nc_zt=23&_nc_ht=scontent.fmnl4-4.fna&_nc_gid=9MieZ6E-4fzVVGbKyuIi6g&oh=00_Afn2FG3dycq2wRUiVwsUS1QKzcbadPrqk9f85owZH-0vvw&oe=693B50AB', description: 'Playful pop culture inspired hand-painted design.' },
  { id: 4, title: 'Abstract Faces', price: 1600, image: 'https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/560322730_853041747276713_8891770953690374083_n.jpg?_nc_cat=103&_nc_cb=99be929b-f3b7c874&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGU6-9iBxDrzuUrIAv4fyRUVHZqFNzhpNhUdmoU3OGk2KrE7MGV5KqxPq2Eo94CSOQPVOAhqeqbN2P6plPhZwk7&_nc_ohc=sayOZalQeskQ7kNvwE-th2o&_nc_oc=AdnJhfrqYyRS_nktGfYydxjUCxqG7T1LhAvbGzdizecTfhyQTAimhPWrkgOzsOG608U&_nc_zt=23&_nc_ht=scontent.fmnl4-1.fna&_nc_gid=6F0Rk9pzGS7_sJ9A7U08dQ&oh=00_Afl2WCR28X8qV9VJ1RSdtGc87zpezft6M-Nqer4Me14MfQ&oe=693B4108', description: 'Bold colors and striking facial features.' },
];