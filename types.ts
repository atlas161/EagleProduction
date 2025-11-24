import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  colSpan: number;
}

export enum Section {
  HERO = 'hero',
  SERVICES = 'services',
  TECH = 'tech',
  GALLERY = 'gallery',
  ZONE = 'zone',
  CONTACT = 'contact'
}