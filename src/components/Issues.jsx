// importamos el hook de react para el context
import { useContext } from "react";

// Importamos el contexto que creamos
import { IssueContext } from "../contexts/Issue";

const Issues = () => {
  // En esta seccion del componente podemos acceder y consumir el contexto de que creamos
  const { issues, url } = useContext(IssueContext);

  return (
    <>
      <h1>Plazti Master: Booking UI Issues Using Context</h1>

      {issues.map((issue) => (
        <p key={`issue-${issue.number}`}>
          <strong>#{issue.number}</strong>{" "}
          <a href={`${url}/${issue.number}`}>{issue.title}</a> {issue.state}
          <strong>
            <em>{" " + issue.user.login}</em>
          </strong>
        </p>
      ))}
    </>
  );
};

export default Issues;
