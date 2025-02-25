import { UIPanel } from "./libs/ui.js";
import { VideoEditTimeline } from "./VideoEdit.timeline.js";

function VideoEdit(editor) {
  const _totalSeconds = 180; // 예시로 180초
  const _framesPerSecond = 30; // 초당 프레임

  const container = new UIPanel();
  container.setId("videoEdit");

  // 비디오 타임라인 추가
  const videoTimeline = new VideoEditTimeline(
    editor,
    _totalSeconds,
    _framesPerSecond,
  );
  container.add(videoTimeline);

  return container;
}

export { VideoEdit };
