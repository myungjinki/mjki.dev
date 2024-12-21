export default function ScratchDetailPage({ params: { id } }: { params: { id: string } }) {
  return (
    <div className="flex flex-col gap-8">
      <a className="text-4xl font-bold" href={`https://scratch.mit.edu/projects/${id}/editor/`}>
        Link
      </a>
      <iframe
        src={`https://scratch.mit.edu/projects/${id}/embed`}
        allowTransparency={true}
        width="485"
        height="402"
        allowFullScreen
      ></iframe>
    </div>
  );
}
