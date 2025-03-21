import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const Table = ({
  children,
  ariaLabel,
  className,
}: {
  children: React.ReactNode;
  ariaLabel?: string;
  className?: string;
}) => {
  return (
    <table
      aria-label={ariaLabel}
      className={cn("table-auto text-sm w-full", className)}
    >
      {children}
    </table>
  );
};

export const TableHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <thead className="relative before:bg-neutral-100 dark:before:bg-neutral-900 before:absolute before:content-[''] before:top-0 before:left-0 before:size-full before:rounded-lg">
      <tr>{children}</tr>
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
        "font-medium py-2 px-4 text-neutral-900 dark:text-neutral-400 text-start relative",
        className
      )}
    >
      {children}
    </th>
  );
};

export const TableBody = ({ children }: { children: React.ReactNode }) => {
  return (
    <tbody className="text-neutral-900 dark:text-neutral-400">{children}</tbody>
  );
};

export const TableRow = ({ children }: { children: React.ReactNode }) => {
  return <tr>{children}</tr>;
};

export const TableCell = ({ children }: { children: React.ReactNode }) => {
  return <td className="py-2 px-4">{children}</td>;
};

export const TableTest = () => {
  return (
    <Table>
      <TableHeader>
        <TableColumn>Props</TableColumn>
        <TableColumn>Type</TableColumn>
        <TableColumn>Default</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <Code>children</Code>
          </TableCell>
          <TableCell>
            <Code>ReactNode</Code>
          </TableCell>
          <TableCell>
            <Code>_</Code>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Code>content</Code>
          </TableCell>
          <TableCell>
            <Code>ReactNode</Code>
          </TableCell>
          <TableCell>
            <Code>_</Code>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Code>className</Code>
          </TableCell>
          <TableCell>
            <Code>string</Code>
          </TableCell>
          <TableCell>
            <Code>_</Code>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Code>placement</Code>
          </TableCell>
          <TableCell>
            <Code>Placement</Code>
          </TableCell>
          <TableCell>
            <Code>&quot;bottom&quot;</Code>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Code>radius</Code>
          </TableCell>
          <TableCell>
            <Code>
              &quot;none&quot; | &quot;sm&quot; | &quot;md&quot; |
              &quot;lg&quot; | &quot;xl&quot; | &quot;full&quot;
            </Code>
          </TableCell>
          <TableCell>
            <Code>&quot;md&quot;</Code>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Code>offset</Code>
          </TableCell>
          <TableCell>
            <Code>number</Code>
          </TableCell>
          <TableCell>
            <Code>8</Code>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Code>openDelay</Code>
          </TableCell>
          <TableCell>
            <Code>number</Code>
          </TableCell>
          <TableCell>
            <Code>200</Code>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Code>exitDelay</Code>
          </TableCell>
          <TableCell>
            <Code>number</Code>
          </TableCell>
          <TableCell>
            <Code>750</Code>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Code>showArrow</Code>
          </TableCell>
          <TableCell>
            <Code>boolean</Code>
          </TableCell>
          <TableCell>
            <Code>false</Code>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Code>arrowColor</Code>
          </TableCell>
          <TableCell>
            <Code>string</Code>
          </TableCell>
          <TableCell>
            <Code>_</Code>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Code>arrowClassName</Code>
          </TableCell>
          <TableCell>
            <Code>string</Code>
          </TableCell>
          <TableCell>
            <Code>_</Code>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Code>animationVariants</Code>
          </TableCell>
          <TableCell>
            <Code>Variants</Code>
          </TableCell>
          <TableCell>
            <Code>defaultAnimation</Code>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Code>disabled</Code>
          </TableCell>
          <TableCell>
            <Code>boolean</Code>
          </TableCell>
          <TableCell>
            <Code>false</Code>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Code>isOpen</Code>
          </TableCell>
          <TableCell>
            <Code>boolean</Code>
          </TableCell>
          <TableCell>
            <Code>false</Code>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Code>disableUserSelect</Code>
          </TableCell>
          <TableCell>
            <Code>boolean</Code>
          </TableCell>
          <TableCell>
            <Code>false</Code>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

const Code = ({ children }: { children: ReactNode }) => {
  return (
    <code className="bg-neutral-50 dark:bg-neutral-900 py-1 px-1.5 rounded-md ">
      {children}
    </code>
  );
};
