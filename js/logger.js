import {typeLog, typeError, typeWarn} from './contanst.js';



function logger(log, type = typeLog) {
    console[type](log);
}

export default logger;