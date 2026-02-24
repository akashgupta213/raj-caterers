import type React from "react";

export default function ThreadsIcon(
  props: React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12c0-5-3.5-9-9-9S3 7 3 12s3.5 9 9 9c4.5 0 7.5-2.5 7.5-6 0-2.8-2-4.5-5-4.5-2.8 0-4.5 1.5-4.5 3.5 0 1.7 1.3 3 3.3 3 1.5 0 2.5-.8 2.7-2.1" />
    </svg>
  );
}