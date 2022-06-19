import axios from "axios";
import { useEffect, useState } from "react";
import { isTemplateExpression } from "typescript";
import agent from "../../../api/agent";
import { Resource } from "../Models";

type ResourceDetailsProps = {
  id: number;
  quantity: number;
};

function ResourceDetails(props: ResourceDetailsProps) {
  const [item, setItem] = useState<Resource[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.Resources.details(props.id)
      .then((resource) => {
        setItem(resource);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <tr>
        <td style={{ textAlign: "center" }}>Loading...</td>
      </tr>
    );

  // if (item == null) {
  //   return (
  //     <tr>
  //       <td>No Resources are in use.</td>
  //     </tr>
  //   );
  // }

  if (item) {
    console.log(item[0].name);
    return (
      <tr>
        <td>{item[0].name}</td>
        <td>{item[0].description}</td>
        <td>{props.quantity}</td>
      </tr>
    );
  }
  return <></>;
}

export default ResourceDetails;
