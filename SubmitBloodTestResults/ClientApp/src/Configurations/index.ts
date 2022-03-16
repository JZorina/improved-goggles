import * as Dev from './Config.development';
import * as Stage from './Config.staging';
import * as Prod from './Config.production';
import { ConfigModal } from '../Models/ConfigModal';

const Config: ConfigModal = process.env.NODE_ENV === 'production' ? Prod.config
     : (process.env.NODE_ENV === 'development' ? Stage.config
     : Dev.config);

export default Config;
