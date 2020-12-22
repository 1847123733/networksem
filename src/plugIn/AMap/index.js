// 高德地图的封装
import AMap from 'vue-amap';    // 1. 首先导入

// 初始化vue-amap
AMap.initAMapApiLoader({        // 2. 配置
  // 高德key
  key: '34930e9667ca46b5d2e03d4a072a3b66',
  // 插件集合 （插件按需引入）
  plugin:['Geolocation', 'Geocoder','PlaceSearch'],
});

export default AMap;             // 3. 导出
