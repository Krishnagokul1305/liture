import { Inbox } from "lucide-react";

export function EmptyState({
  title = "You're all caught up!",
  description = "New opportunities will appear here when available.",
}) {
  return (
    <div className="flex flex-col items-center bg-red-50/50 rounded-t-lg justify-center text-center space-y-4 p-12">
      <div className="rounded-full bg-primary p-4">
        <Inbox className="w-8 h-8 text-white" />
      </div>
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground max-w-sm">{description}</p>
      </div>
    </div>
  );
}
