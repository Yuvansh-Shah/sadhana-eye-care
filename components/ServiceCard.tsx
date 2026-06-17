import Link from "next/link";
import { ArrowRight, Sparkles, ScanEye, Gauge, Droplets, Eye } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Service } from "@/lib/services";

const iconMap: Record<Service["icon"], LucideIcon> = {
  Sparkles,
  ScanEye,
  Gauge,
  Droplets,
  Eye,
};

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon];
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-brand-100 bg-white p-6 transition-all hover:border-brand-200 hover:shadow-md hover:shadow-brand-900/5"
    >
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-brand-900">
        {service.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-700/85">
        {service.summary}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-700">
        Learn more
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
