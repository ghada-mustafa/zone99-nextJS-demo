export type LayoutProps = Readonly<{
  children: React.ReactNode;
}>

export type Post = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}

export type Service = {
  displayName: string;
  slug: string;
  description: string;
  technologies: string[];
}