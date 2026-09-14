interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * Renders schema.org structured data. `<` is escaped so strings in the payload
 * can't close the script tag.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
