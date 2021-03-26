import { Job, KraneClient } from "@krane/common";

import Head from "next/head";
import Alert from "../../components/global/Alert";
import Header from "../../components/global/Header";
import { DeploymentJobList } from "../../components/DeploymentJobList";

type Props = {
  jobs: Job[];
  error: Error;
};

export default function Activity({ jobs, error }: Props) {
  return (
    <>
      <Head>
        <title>Activity</title>
        <link rel="icon" href="/favicons/favicon.ico" />
      </Head>

      <Header />

      <div className="container m-auto max-w-screen-md flex flex-col mt-2">
        {error && (
          <div className="mt-4">
            <Alert
              type="error"
              message={`${error} - An error like this usually indicates auth issues or dns issues when requesting data from Krane`}
            />
          </div>
        )}

        {jobs && jobs.length > 0 && <DeploymentJobList jobs={jobs} />}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const endpoint = process.env.KRANE_ENDPOINT;
  const token = process.env.KRANE_TOKEN;
  const client = new KraneClient(endpoint, token);

  try {
    // TODO: instead of fetching all deployments, fetch only the Jobs to reduce data loading.
    // A method like client.getAllJobs() would need to be available by the KraneClient
    const deployments = await client.getDeployments();

    // temporary solution to sort all delpoyment jobs in descending order (newest jobs on top)
    const jobs = deployments
      .map((deployment) => deployment.jobs)
      .flat()
      .sort(
        (jobA, jobB) =>
          new Date(jobB.start_time_epoch).getTime() -
          new Date(jobA.start_time_epoch).getTime()
      );

    return { props: { jobs } };
  } catch (e) {
    return { props: { jobs: [], error: e } };
  }
}
