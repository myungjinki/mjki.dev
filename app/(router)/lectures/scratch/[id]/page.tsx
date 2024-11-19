export default function ScratchDetailPage() {
  return (
    <div className="flex flex-col gap-8">
      <a className="font-bold text-4xl" href="https://scratch.mit.edu/projects/1098481551/editor/">
        Link
      </a>
      <iframe
        src="https://scratch.mit.edu/projects/1098481551/embed"
        allowTransparency={true}
        width="485"
        height="402"
        allowFullScreen
      ></iframe>
    </div>
  );
}
