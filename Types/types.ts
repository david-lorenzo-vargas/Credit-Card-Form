export type FormState = {
  adult: boolean | undefined,
  smoke: boolean | undefined,
  alcohol: boolean | undefined,
  bloodPressure: boolean | undefined,
  medication: boolean | undefined,
}

export type NavItem = {
  key: NavItemEnum;
  label: string;
}

export enum QuestionEnum {
  adult = 'adult',
  smoke = 'smoke',
  alcohol = 'alcohol',
  bloodPressure = 'bloodPressure',
  medication = 'medication'
}

export enum FooterEnum {
  telephone = 'telephone',
  email = 'email',
  dermatica = 'dermatica',
  medExpress = 'medExpress',
  digital = 'digital'
}

export enum NavItemEnum {
  about = 'about',
  brands = 'brands',
  careers = 'careers',
  contact = 'contact'
};