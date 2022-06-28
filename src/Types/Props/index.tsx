export type LayOutProps = {
  hideBackButton: boolean;
  headerImage: string;
};

export type ShopFooterPropsTypes = {
  activePath?: "Profile" | "Booking" | "History" | "Service" | "";
};

export interface ShopLayOutProps extends ShopFooterPropsTypes {
  hideBackButton?: boolean;
}

export type ShopSetupLayOutProps = {
  buttonType: "primary" | "orange";
  buttonLabel: string;
  goto: () => void;
};
