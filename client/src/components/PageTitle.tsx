interface Props {
  title: string;
}

function PageTitle({ title }: Props) {
  return <h1 className="page-title">{title}</h1>;
}

export default PageTitle;
