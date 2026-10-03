import { DocSidebar } from '@/components/docs/doc-sidebar';
import { DOCS, type DocPageMeta } from '@/lib/m31a/product';

export { DocSidebar };

export function getDocBySlug(slug: string): DocPageMeta | undefined {
  return DOCS.find((d) => d.slug === slug);
}
