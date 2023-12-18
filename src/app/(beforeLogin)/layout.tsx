type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

// 모달과 레이아웃이 같은 폴더에 있어서 에러가 나지 않는다.
// 옆에 있는 page.tsx가 children으로 간다.
// @modal의 패러랠 라우트가 모달로 간다.
export default function Layout({ children, modal }: Props) {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
}

// parallel 라우트에 대한 기본값(= parallel 라우트가 필요없을 때)-> default.tsx
// 주소가 localhost:3000일 때는 children -> page.tsx, modal -> @modal/default.tsx
// 주소가 localhost:3000/i/flow/login일 때는 children -> i/flow/login/page.tsx, modal -> @modal/i/flow/page.tsx
