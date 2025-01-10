export interface AuthTemplateProps {
  children: React.ReactNode;
  hasAcc?: boolean;
  isTitle?: boolean;
  isLinked?: boolean;
}

export interface RegisterPayload {
  mu_nik: string;
  mu_fullname: string;
  mu_blood_type: string;
  mu_phoneNumber: string;
  mu_password: string;
  mu_address: string;
  mu_province: string;
  mu_city: string;
  mu_district: string;
  mu_fullname: string;
  mu_blood_type: string;
}

export interface LoginPayload {
  mu_nik: string;
  mu_password: string;
}

export interface PinPayload {
  mu_nik: string;
  mu_pin: string;
}