import { Job } from "@krane/common";

import { calculateTimeDiff } from "../utils/time";

import { MdError } from "react-icons/md";
import { FaCheckCircle, FaUserCircle } from "react-icons/fa";

export function JobListItem({ job }: { job: Job }) {
  return (
    <li className="py-4">
      <div className="flex space-x-3">
        <FaUserCircle className="h-6 w-6 text-gray-600" />

        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <div className="flex space-x-2 items-center">
              <h3 className="text-sm font-medium">{job.deployment}</h3>
              {job?.status.failure_count > 0 ? (
                <MdError className="text-md text-red-500" />
              ) : (
                <FaCheckCircle className="text-sm text-green-500" />
              )}
            </div>
            <p className="text-xs text-gray-500">
              {calculateTimeDiff(job?.start_time_epoch)}
            </p>
          </div>
          <p className="text-sm text-gray-500">
            {job.type == "RUN_DEPLOYMENT" && `Deploy ${job.deployment}`}
            {job.type == "RESTART_CONTAINERS" && `Restart ${job.deployment}`}
            {job.type == "STOP_CONTAINERS" && `Stop ${job.deployment} `}
            {job.type == "DELETE_DEPLOYMENT" && `Delete ${job.deployment}`}
          </p>
        </div>
      </div>
    </li>
  );
}
