type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

// 모달과 레이아웃이 같은 폴더에 있어서 에러가 나지 않는다.
// 옆에 있는 page.tsx가 childrend으로 간다.
// @modal의 패러랠 라우트가 모달로 간다.
export default function Layout({ children, modal }: Props) {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
}
