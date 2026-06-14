import { cn } from "@/lib/utils"

export function BuildingsIcon({ className }) {
  return (
    <svg className={cn(className)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M14 8L10 8C7.518 8 7 8.518 7 11L7 22H17L17 11C17 8.518 16.482 8 14 8Z" stroke="#64748B" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M11 12L13 12M11 15H13M11 18H13" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 22L21 8.18564C21 6.95735 21 6.3432 20.7013 5.84966C20.4026 5.35612 19.8647 5.08147 18.7889 4.53216L14.4472 2.31536C13.2868 1.72284 13 1.93166 13 3.22873L13 7.7035" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 22L3 13C3 12.1727 3.17267 12 4 12L7 12" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 22L2 22" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
