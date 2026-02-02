
import React from 'react';

export interface ServicePackage {
  title: string;
  price: string;
  features: string[];
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Advantage {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface ExtraService {
  id: string;
  title: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  beforeImg: string;
  afterImg: string;
  category: string;
}
