const patharray: Array<PathType> = [
  {
    pathName: "Dashboard",
    name: "Dashboard",
    path: "/Dashboard",
  },
  {
    pathName: "Device",
    name: "Danh sách thiết bị",
    path: "/Device",
    prefix: "Thiết bị"
  },
  {
    pathName: "DeviceDetail",
    name: "Chi tiết thiết bị",
    path: "/DeviceDetail",
  },
  {
    pathName: "DeviceUpdate",
    name: "Cập nhập thiết bị",
    path: "/DeviceUpdate",
  },
  {
    pathName: "DeviceAdd",
    name: "Thêm thiết bị",
    path: "/DeviceAdd",
  },
  {
    pathName: "UserProfile",
    name: "Thông tin cá nhân",
    path: "/UserProfile",
  },
  {
    pathName: "Service",
    name: "Danh sách dịch vụ",
    path: "/Service",
    prefix: "Dịch vụ"
  },
  {
    pathName: "Number",
    name: "Danh sách cấp số",
    path: "/Number",
    prefix: "Cấp số"
  },
  {
    pathName: "Reports",
    name: "Lập báo cáo",
    path: "/Reports",
    prefix: "Báo cáo"
  },
  {
    pathName: "Systems",
    name: "Cài đặt hệ thống",
    prefix: "Cài đặt hệ thống"
  },
  {
    pathName: "Roles",
    name: "Quản lý vai trò",
    path: "/Systems/Roles"
  },
  {
    pathName: "Accouts",
    name: "Quản lý tài khoản",
    path: "/Systems/Accouts"
  },
  {
    pathName: "Diary",
    name: "Nhật ký hoạt động",
    path: "/Systems/Diary"
  },
]
const filerArray = (path: Array<string>) => {
  let newarray:Array<PathType> = []
  path.forEach((item, index) => {
    patharray.forEach((object) => {
      if(item === object.pathName) {
        newarray[index] = object
      }
    })
  })
  return newarray
}
export { filerArray }
export type {PathType}
type PathType = {
  pathName: string
  name: string
  path?: string
  prefix?: string
}