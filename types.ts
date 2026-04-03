
/* Added React import to fix "Cannot find namespace 'React'" error on line 6 */
import React from 'react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Testimonial {
  name: string;
  company: string;
  text: string;
  avatar: string;
}
