import CommonContents from "../Components/common/CommonContents";

const tutorialData = {
  title: "자습서: React 시작하기",
  description: "이 자습서는 React에 대한 어떤 지식도 가정하지 않습니다.",
  contents:
    "우리는 이 자습서에서 작은 게임을 만들겁니다. 게임을 만들고 싶지 않아서 자습서를 건너뛰고 싶을 수 있습니다. 그래도 한번 해보세요! 자습서를 통해 React 앱을 만드는 기본적인 사항들을 배웁니다. 이것을 마스터하면 React를 더 깊게 이해할 수 있습니다.",
};

const Tutorial = () => {
  return (
    <CommonContents
      title={tutorialData.title}
      description={tutorialData.description}
      contents={tutorialData.contents}
    />
  );
};

export default Tutorial;
