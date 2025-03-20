import { cn } from "@/lib/utils";

export const Table = ({
  children,
  ariaLabel,
}: {
  children: React.ReactNode;
  ariaLabel?: string;
}) => {
  return (
    <table aria-label={ariaLabel} className="table-auto text-sm w-[700px] ">
      {children}
    </table>
  );
};

export const TableHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <thead className="text-neutral-300">
      <tr className="[&>th:first-child]:rounded-l-xl [&>th:last-child]:rounded-r-xl">
        {children}
      </tr>
    </thead>
  );
};

export const TableColumn = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <th
      scope="col"
      className={cn(
        "font-medium py-2 px-4 bg-neutral-800 text-start",
        className
      )}
    >
      {children}
    </th>
  );
};

export const TableBody = ({ children }: { children: React.ReactNode }) => {
  return <tbody className="text-neutral-400">{children}</tbody>;
};

export const TableRow = ({ children }: { children: React.ReactNode }) => {
  return <tr>{children}</tr>;
};

export const TableCell = ({ children }: { children: React.ReactNode }) => {
  return <td className="py-2 px-4">{children}</td>;
};
