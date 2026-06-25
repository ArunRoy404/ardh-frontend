import { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { cn } from "@/lib/utils";
import NoDataFound from "../shared/NoDataState";
import DataTableColumnVisibility from "./DataTableColumnVisibility";



export function DataTable({
  columns,
  data = [],
  rowColored = false,
  markRow,
  markRowColor,
}) {

  const [columnVisibility, setColumnVisibility] = useState({})

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: { columnVisibility },
    onColumnVisibilityChange: setColumnVisibility,
  });

  return (
    <div className="space-y-4">

      <div className="flex justify-end">
        <DataTableColumnVisibility table={table} />
      </div>

      <table className="w-full border-collapse text-left">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="bg-muted border-b border-border">
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    className="px-6 py-4 text-xs font-semibold text-dark-gray uppercase tracking-wider"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => {
              const marked = row?.original[markRow];

              return (
                <tr
                  key={row.id}
                  className={cn(
                    "border-b border-border transition-colors hover:bg-muted/50",
                    rowColored && "even:bg-muted/50"
                  )}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-6 py-4 text-sm"
                      style={
                        marked ? { backgroundColor: markRowColor } : undefined
                      }
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={columns.length}>
                <div className="flex flex-col items-center justify-center py-16 px-6">
                  <NoDataFound message="No results found." />
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
