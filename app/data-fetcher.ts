import { logger } from "./logger"

export function fetchSomeDataAsync() {
  logger('begin request');
  return new Promise(resolve => {
    logger('request finished');
    setTimeout(() => resolve('ok'), 300)
  })
}