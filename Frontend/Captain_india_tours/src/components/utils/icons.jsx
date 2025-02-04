
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faMapMarkedAlt, 
  faHotel, 
  faCar, 
  faUtensils, 
  faChevronDown,
  faClock,
  faCheck,
  faLock,
  faCalendarAlt,
  faShieldAlt,
  faPhone,
  faEnvelope,
  faBars,
  faRoute,
  faPersonHiking,
  faHeadset,
  faLocationDot,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';

export const setupIcons = () => {
  library.add(
    faMapMarkedAlt, 
    faHotel, 
    faCar, 
    faUtensils, 
    faChevronDown,
    faClock,
    faCheck,
    faLock,
    faCalendarAlt,
    faShieldAlt,
    faPhone,
    faEnvelope,
    faBars,
    faFacebookF, 
    faTwitter, 
    faInstagram, 
    faLinkedinIn,
    faRoute,
    faPersonHiking,
    faHeadset,
    faLocationDot,
    faCircleCheck

  );
};