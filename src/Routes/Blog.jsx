import CommonContents from "../Components/common/CommonContents";

const blogData = {
  title: "How to Upgrade to the React 18 Release Candidate",
  description: "March 08, 2022 by Rick Hanlon",
  contents:
    "Our next major version, React 18, is available today as a Release Candidate (RC). As we shared at React Conf, React 18 introduces features powered by our new concurrent renderer, with a gradual adoption strategy for existing applications. In this post, we will guide you through the steps for upgrading to React 18.",
};

const Blog = () => {
  return (
    <CommonContents
      title={blogData.title}
      description={blogData.description}
      contents={blogData.contents}
    />
  );
};

export default Blog;
