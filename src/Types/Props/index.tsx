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
