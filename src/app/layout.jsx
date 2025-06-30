import '@styles/scss/style.scss';
import "./globals.css";

import "@styles/css/plugins/bootstrap-grid.css";
import "@styles/css/plugins/swiper.min.css";
import "@styles/css/plugins/magnific-popup.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

import ScrollbarProgress from "@layouts/scrollbar-progress/Index";

import AppData from "@data/app.json";

export const metadata = {
  title: {
		default: AppData.settings.siteName,
		template: "%s | " + AppData.settings.siteName,
	},
  description: AppData.settings.siteDescription,
}

const Layouts = ({
  children
}) => {
  return (
    <html lang="en">
      
      <body>
        <div className="mil-wrapper">
          {children}

          <ScrollbarProgress />
        </div>
      </body>
      <GoogleAnalytics gaId="G-5PVC62L8QP" />
    </html>
  );
};
export default Layouts;
