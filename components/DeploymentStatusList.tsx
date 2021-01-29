import clsx from "clsx";
import { Tooltip } from "react-tippy";

import { Deployment, Job } from "@krane/common";
import { calculateTimeDiff } from "../utils/time";

type Props = { deployments: Deployment[] };
export default function DeploymentsList({ deployments }: Props) {
  return (
    <div className="shadow rounded-md">
      <ul className="divide-y divide-gray-200">
        {deployments.map((deployment) => (
          <DeploymentListItem
            key={deployment.config.name}
            deployment={deployment}
          />
        ))}
      </ul>
    </div>
  );
}

function DeploymentListItem({ deployment }: { deployment: Deployment }) {
  const latestJob = (d: Deployment) => sortByMostRecent(d.jobs)[0];
  const sortByMostRecent = (jobs: Job[]) =>
    jobs.sort((jobA, jobB) => jobB.start_time_epoch - jobA.start_time_epoch);

  return (
    <li className="px-6 py-4">
      <div className="flex flex-col space-y-0 mb-1">
        <div className="text-regular">{deployment.config.name}</div>
        <div className="text-gray-400 text-xs mt-1">
          Updated&nbsp;
          {calculateTimeDiff(latestJob(deployment)?.start_time_epoch)}
        </div>
      </div>

      <div className="flex overflow-x-auto w-full no-scrollbar">
        <ActivityTimeline jobs={sortByMostRecent(deployment.jobs)} />
      </div>
    </li>
  );
}

function ActivityTimeline({ jobs }: { jobs: Job[] }) {
  return (
    <div className="flex h-8 space-x-0.5">
      {jobs.map((job) =>
        job.status.failure_count > 0 ? (
          <Tooltip
            key={job.id}
            className="cursor-pointer"
            position="top"
            distance={-30}
            html={<ActivityMetadata job={job} />}
          >
            <TimelineItem onClick={() => console.log(job)} success={false} />
          </Tooltip>
        ) : (
          <Tooltip
            key={job.id}
            className="cursor-pointer"
            position="top"
            distance={-30}
            html={<ActivityMetadata job={job} />}
          >
            <TimelineItem onClick={() => console.log(job)} success={true} />
          </Tooltip>
        )
      )}
    </div>
  );
}

function ActivityMetadata({ job }: { job: Job }) {
  return (
    <div className="text-left text-xs">
      <div>{job.type.toLowerCase().replace("_", " ")}</div>
      <div>{calculateTimeDiff(job.start_time_epoch)}</div>
      <div>
        {job.status.failure_count > 0 &&
          job.status.failures.map((f) => (
            <div className="py-2 max-w-xs">
              {f.execution}) {f.message}
            </div>
          ))}
      </div>
    </div>
  );
}

function TimelineItem({
  success,
  onClick,
}: {
  success: boolean;
  onClick?: (param?: any) => void;
}) {
  return (
    <div
      onClick={onClick}
      className={clsx("h-full w-1.5", {
        "bg-green-400": success,
        "bg-red-400": !success,
      })}
    />
  );
}
