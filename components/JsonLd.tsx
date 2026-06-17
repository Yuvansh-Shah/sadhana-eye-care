/**
 * Renders a JSON-LD structured-data <script>. The `<` characters are escaped
 * to prevent XSS via the serialized payload (per Next.js JSON-LD guidance).
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
