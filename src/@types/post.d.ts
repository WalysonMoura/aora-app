type Creator = {
  username: string;
  avatar: string;
};

export type Post = {
  $id: string;
  title: string;
  thumbnail: string;
  video: string;
  creator: Creator;
};
