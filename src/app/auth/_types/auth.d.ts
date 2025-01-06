export interface AuthTemplateProps {
  children: React.ReactNode;
  hasAcc: boolean;
}

export interface RegisterPayload {
  mu_nik: string;
  mu_phoneNumber: string;
  mu_password: string;
  mu_address: string;
  mu_province: string;
  mu_city: string;
  mu_district: string;
}

export interface LoginPayload {
  mu_nik: string;
  mu_password: string;
}