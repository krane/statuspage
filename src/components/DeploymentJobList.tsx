import { Job } from "@krane/common";
import { JobListItem } from "./JobListItem";

export function DeploymentJobList({ jobs }: { jobs: Job[] }) {
  return (
    <ul className="divide-y divide-gray-200">
      {jobs.map((job) => (
        <JobListItem key={job.id} job={job} />
      ))}
    </ul>
  );
}
