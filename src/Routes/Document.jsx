import CommonContents from "../Components/common/CommonContents";

const documentData = {
  title: "시작하기",
  description: "이 페이지는 React 문서 및 관련된 리소스의 개요입니다.",
  contents:
    "React는 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리입니다. 홈페이지나 자습서에서 React에 대한 모든 것을 알아보세요.",
};

const Document = () => {
  return (
    <CommonContents
      title={documentData.title}
      description={documentData.description}
      contents={documentData.contents}
    />
  );
};

export default Document;
