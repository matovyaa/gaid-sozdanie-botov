interface TableProps {
  headers: string[];
  rows: string[][];
}

export default function Table({ headers, rows }: TableProps) {
  return (
    <div className="overflow-x-auto my-4 sm:my-6 -mx-4 sm:mx-0">
      <div className="inline-block min-w-full align-middle px-4 sm:px-0">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-purple-900/30 border-b border-purple-500/30">
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold text-purple-300"
                  dangerouslySetInnerHTML={{ __html: header }}
                />
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b border-purple-500/10 hover:bg-purple-900/10 transition-colors"
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-300"
                    dangerouslySetInnerHTML={{ __html: cell }}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
