import clsx from "clsx";
import { Tooltip } from "react-tippy";
import { Deployment, Job } from "@krane/common";

import { calculateTimeDiff } from "../utils/time";
import { GlobeIcon, GreenCheckLogo, RedCheckLogo } from "./global/Icons";
import { getLastExecutedJob, sortJobsByMostRecent } from "../utils/krane";
import { useState } from "react";

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
  const [showVisitOptions, setShowVisitOptions] = useState<boolean>(false);
  const lastExecutedJob = getLastExecutedJob(deployment);
  return (
    <li className="px-6 py-4">
      <div className="flex flex-col mb-1">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {lastExecutedJob?.status.failure_count > 0 ? (
              <RedCheckLogo width="4" height="4" />
            ) : (
              <GreenCheckLogo width="4" height="4" />
            )}
            <div className="font-md text-lg">{deployment.config.name}</div>
          </div>

          <div>
            <button
              type="button"
              onMouseEnter={() => setShowVisitOptions(true)}
              onMouseLeave={() => setShowVisitOptions(false)}
              className="items-center outline-none focus:outline-none"
            >
              <GlobeIcon width="4" height="4" />
            </button>
            {showVisitOptions && (
              <span
                className="relative block"
                onMouseEnter={() => setShowVisitOptions(true)}
                onMouseLeave={() => setShowVisitOptions(false)}
              >
                <div className="absolute right-0 -top-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div
                    className="divide-y w-full"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="option-menu"
                  >
                    {deployment.config.alias.map((alias) => (
                      <a
                        key={alias}
                        href={`http://${alias}`}
                        target="_blank"
                        className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        {alias}
                      </a>
                    ))}
                  </div>
                </div>
              </span>
            )}
          </div>
        </div>

        <div className="text-gray-400 text-xs">
          Updated&nbsp;
          {calculateTimeDiff(lastExecutedJob?.start_time_epoch)}
        </div>
      </div>

      <div className="flex overflow-x-auto w-full no-scrollbar">
        <ActivityTimeline jobs={sortJobsByMostRecent(deployment.jobs)} />
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
            position="bottom"
            distance={-30}
            html={<ActivityMetadata job={job} />}
          >
            <TimelineItem onClick={() => console.log(job)} success={false} />
          </Tooltip>
        ) : (
          <Tooltip
            key={job.id}
            className="cursor-pointer"
            position="bottom"
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
            <div key={f.execution} className="py-2 max-w-xs">
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
        "bg-gradient-to-b from-green-500 to-green-200": success,
        "bg-gradient-to-b from-red-500 to-red-200": !success,
      })}
    />
  );
}
