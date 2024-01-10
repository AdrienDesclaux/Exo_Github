export type Repo = {
  id: number;
  name: string;
  description: string;
  fullname: string;
  owner: {
    avatar_url: string;
  };
};
