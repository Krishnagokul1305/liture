export default function Spinner({ size = 40 }) {
  return (
    <div className="flex items-center justify-center">
      <div
        className="animate-spin rounded-full border-4 border-white border-t-primary"
        style={{ width: size, height: size }}
      />
    </div>
  );
}
