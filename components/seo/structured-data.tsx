import type { ReactElement } from 'react';

interface StructuredDataProps {
  data: Record<string, unknown>;
}

export default function StructuredData({ data }: StructuredDataProps): ReactElement {
  return (
    <script type="application/ld+json">
      {JSON.stringify(data)}
    </script>
  );
}