"use client";

export default function ScrollToEnquiryButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const scrollToEnquiry = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const el = document.getElementById("enquiry");

    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    el.classList.add("ring-4", "ring-yellow-400", "animate-pulse");

    setTimeout(() => {
      el.classList.remove("ring-4", "ring-yellow-400", "animate-pulse");
    }, 2000);
  };

  return (
    <button onClick={scrollToEnquiry} className={className}>
      {children}
    </button>
  );
}