import request from "@/utils/request";


// 获取完整设备信息
export function getAllDeviceInfoByCodes(data) {
  return request({
    url: '/query/getAllDeviceInfoByCodes',
    method: 'post',
    data: data,
  })
}


// 获取设备信息
export function getDeviceInfoByCode(deviceCode) {
  return request({
    url: '/service/query/getDeviceInfoByCode/' + deviceCode,
    method: 'get',
  })
}


// 获取设备运动信息
export function getDeviceMotionInfoByCode(deviceCode) {
  return request({
    url: '/service/query/getDeviceMotionInfoByCode/' + deviceCode,
    method: 'get',
  })
}
// 根据设备编号获取设备功能包信息
export function getDevicePackageInfoByCode(deviceCode) {
  return request({
    url: '/service/query/getDevicePackageInfoByCode/' + deviceCode,
    method: 'get',
  })
}
// 根据设备编号获取设备拍照信息
export function getDevicePhotoInfoByCode(deviceCode) {
  return request({
    url: '/service/query/getDevicePhotoInfoByCode/' + deviceCode,
    method: 'get',
  })
}
// 根据设备编号获取设备预警信息
export function getDeviceWarningInfoByCode(deviceCode) {
  return request({
    url: '/service/query/getDeviceWarningInfoByCode/' + deviceCode,
    method: 'get',
  })
}
