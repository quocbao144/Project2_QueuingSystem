import { AiOutlineDesktop, AiOutlineComment, AiOutlineSetting, AiOutlineMore } from "react-icons/ai";
import { BsLayoutWtf, BsLayers, BsFileEarmarkBarGraph } from "react-icons/bs";
import NavLinkC from '../MenuC/NavLinkC';
import SubMenuC from '../MenuC/SubMenuC';

export default function NavigateMenu() {
  return (
    <>
      <NavLinkC to="/Dashboard" iconMenu={<BsLayoutWtf />}> Dashboard</NavLinkC>
      <NavLinkC to="/Device" iconMenu={<AiOutlineDesktop />}> Thiết Bị</NavLinkC>
      <NavLinkC to="/Service" iconMenu={<AiOutlineComment />}> Dịch vụ</NavLinkC>
      <NavLinkC to="/Number" iconMenu={<BsLayers />}> Cấp số</NavLinkC>
      <NavLinkC to="/Reports" iconMenu={<BsFileEarmarkBarGraph />}> Báo cáo</NavLinkC>
      <SubMenuC subTitle="Cài đặt hệ thống" iconMenu={<AiOutlineSetting />} iconExpand={<AiOutlineMore/>}>
        <NavLinkC to="/Systems/Roles"> Quản lý vai trò</NavLinkC>
        <NavLinkC to="/Systems/Accouts"> Quản lý tài khoản</NavLinkC>
        <NavLinkC to="/Systems/Diary"> Nhật ký người dùng</NavLinkC>
      </SubMenuC>
    </>
  )
}
