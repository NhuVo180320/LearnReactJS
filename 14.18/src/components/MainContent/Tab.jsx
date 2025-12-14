export default function Tab({ button, children, ButtonsContainer }) {
  // Đặt tên lại để sử dụng như một component phai viet chu hoa dau
  //neu khong viet hoa thi no se hieu la mot the html binh thuong
  //c1 tao bien trung gian de dat ten component
  //const ButtonsContainer = buttonsContainer;

  //c2 truyen truc tiep ten viet hoa chu cai dau vao function component

  return (
    <>
      {/* children la nhung gi nam giua the mo va the dong cua component */}
      <ButtonsContainer>{button}</ButtonsContainer>
      {children}
    </>
  );
}
