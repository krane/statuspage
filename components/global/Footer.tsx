type Props = { endpoint?: string };
export default function Footer({ endpoint }: Props) {
  return (
    <footer className="py-8 border-t border-gray-300">
      <div className="text-center">
        <div className="flex flex-col">
          <p className="text-xs text-gray-400 font-medium">
            Powered by&nbsp;
            <a
              href="https://krane.sh"
              target="_blank"
              className="hover:text-gray-500"
            >
              Krane
            </a>
          </p>

          {!!endpoint && (
            <a
              href={`${endpoint}`}
              target="_blank"
              className="text-xs text-gray-400 hover:text-gray-500 hover:cursor-pointer"
            >
              {endpoint}
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
