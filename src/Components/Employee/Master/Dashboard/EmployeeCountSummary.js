import LineChart from './Chart/LineChart';
export default function EmployeeCountSummary() {
  return (
    <div className="col-md-8">
      <div className="employee_count bg_white_box p-3 mb-3">
        <div className="employee_count_chart p-3">
          <h6>Employee Head Count Summary</h6>
          <LineChart />
        </div>
      </div>
    </div>
  );
}
