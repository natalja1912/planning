import { Header, Sidebar, GroupPrograms } from "./components";
import { Tab, Tabs } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./PlanningPage.scss";

function PlanningPage() {

  return (
    <div className="main">
      <Header />
      <Sidebar />
      <Tabs defaultActiveKey="group" id="uncontrolled-tab-example">
        <Tab eventKey="group" title="Групповое">
          <GroupPrograms />
        </Tab>
        <Tab eventKey="individual" title="Индивидуальное">
          <GroupPrograms />
        </Tab>
      </Tabs>
    </div>
  );
}

export default PlanningPage;
