// Providers
import IssueProvider from "../contexts/Issue";

// Components
import Issues from "./Issues";

const App = () => {
  return (
    <IssueProvider url="https://api.github.com/repos/Platzi-Master-C9/booking-ui/issues">
      <Issues />
    </IssueProvider>
  );
};

export default App;
