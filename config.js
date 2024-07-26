const config={
  alianceKey:"wdjXJXPeMqDOhEDg",//后台分配的allianceKey
  dev:{//开发环境
    domain:"http://127.0.0.1:8000/api/wechat",//后台接口地址
    qiniuDomain:"https://qny.xxzxshudong.cloud/"//七牛地址
  },
  prod:{//生产环境http://ry9cdem92.hn-bkt.clouddn.com
    domain: "https://www.xxzxshudong.cloud/api/wechat",
    qiniuDomain: "https://qny.xxzxshudong.cloud/"
  }
}

const domain = config.prod.domain;
//const domain = config.dev.domain;

const qiniuDomain = config.prod.qiniuDomain;
const bgImage = config.prod.qiniuDomain;
const alianceKey = config.alianceKey;
const region = 'SCN';

const TX_MAP_KEY = '5WPBZ-MKR6Z-XKHXE-7R7PF-KTAP3-COFWC';//腾讯地图开发者ID

module.exports = {
  domain, qiniuDomain, bgImage, alianceKey, TX_MAP_KEY, region
}