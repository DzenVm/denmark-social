"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import type { ComponentProps } from "react";

/* Reads window.location.search safely:
   - SSR returns "" (no params) → page stays static
   - Client returns real search string
   - Subscribes to popstate so back/forward navigation updates the link */
function subscribeSearch(cb: () => void) {
  window.addEventListener("popstate", cb);
  return () => window.removeEventListener("popstate", cb);
}
const getClientSearch = () => window.location.search;
const getServerSearch = () => "";

type Props = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

/**
 * Same as <Link> but forwards UTM/gclid params from the current URL to the
 * destination. Own params in `href` (e.g. ?game=pharaoh) take priority.
 *
 * Security guarantees (Google Ads / Compromised-site policy):
 *  - Destination is always the fixed `href` prop — never read from URL params
 *    (no open redirect).
 *  - Params are placed only in the href attribute, not rendered into DOM text
 *    (no XSS reflection).
 *  - Destination is always same-origin.
 */
export default function KeepParamsLink({ href, children, ...rest }: Props) {
  const rawSearch = useSyncExternalStore(
    subscribeSearch,
    getClientSearch,
    getServerSearch,
  );

  const [basePath, ownQuery] = href.split("?");

  const incoming = new URLSearchParams(rawSearch);
  const own = new URLSearchParams(ownQuery ?? "");

  /* Start from incoming params, then override with the link's own params */
  const merged = new URLSearchParams(incoming);
  own.forEach((v, k) => merged.set(k, v));

  /* Strip any param that looks like an external URL — paranoid safety check */
  for (const [k, v] of Array.from(merged.entries())) {
    if (/^https?:\/\//i.test(v)) merged.delete(k);
  }

  const qs = merged.toString();
  const finalHref = qs ? `${basePath}?${qs}` : basePath;

  return (
    <Link href={finalHref} {...rest}>
      {children}
    </Link>
  );
}
