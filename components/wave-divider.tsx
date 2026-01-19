export function WaveDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`wave-divider ${flip ? "rotate-180" : ""}`}>
      <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path
          d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
          fill="currentColor"
          className="text-muted/30"
        />
      </svg>
    </div>
  )
}
