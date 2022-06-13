import CommonContents from "../Components/common/CommonContents";

const communityData = {
  title: "Where To Get Support",
  description: "React has a community of millions of developers.",
  contents:
    "On this page we’ve listed some React-related communities that you can be a part of; see the other pages in this section for additional online and in-person learning materials.",
};

const Community = () => {
  return (
    <CommonContents
      title={communityData.title}
      description={communityData.description}
      contents={communityData.contents}
    />
  );
};

export default Community;
